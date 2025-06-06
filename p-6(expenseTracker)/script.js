
class Expense {
  constructor(id,title,amount,date){
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date= date;
  }

  formattedAmount(){
    return `$${parseFloat(this.amount).toFixed(2)}`;
  }

  formattedDate(){
    return new Date(this.date).toLocaleDateString();

  }
}

class ExpenseTracker { 
  constructor(){
    this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    this.form= document.querySelector('#expense-form');
    this.list = document.querySelector('#expense-list');

    this.form.addEventListener('submit', this.addExpense.bind(this));
    this.render();
  }

  savetoStorage(){
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  render(){
    this.list.innerHTML = '';
    this.expenses.forEach((exp) => {
      const li = document.createElement('li');
      li.innerHTML = `
      <div>
      <strong>${exp.title}</strong>-${new Expense().formattedAmount.call(exp)} <br>
      <small>${new Expense().formattedDate.call(exp)}</small>
      </div>
      `;
      
      this.list.appenChild(li);
    });
  }

  addExpense(e){
    e.preventDefault();
    const title = this.form.title.value;
    const amount = this.form.amount.value;
    const date = this.form.date.value;
    const id = Date.now().toString();
    const newExpense = Expense(id,title,amount,date);

    this.expenses.push(newExpense);
    this.savetoStorage();
    this.render();
    this.form.reset();
  }

  deleteExpense(id){
    this.expenses = this.expenses.filter((exp) => exp.id !== id);
    this.savetoStorage();
    this.render();
  }

  editExpense(id){
    const exp = this.expenses.find((e) => e.id === id);
    this.form.title.value = exp.title;
    this.form.amount.value = exp.amount;
    this.form.date.value = exp.date;
    this.deleteExpense(id);


  }
}

new ExpenseTracker();