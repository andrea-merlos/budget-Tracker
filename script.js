// I am defining the budget class
class Budget {
  constructor() {
    // starts the object
    this.income = [];
    // creates an empthy array to store all income entries
    this.expenses = [];
    // creates an empthy array to store all expenses entries
    this.totalBudget = 0;
    // starts total budget at zero
  }

  addIncome(description, amount) {
    // defines a method to add an income
    this.income.push({ description, amount });
    // adds new object to income array with discription and amount
    this.calculateBudget();
    // calls method to recalculate and update total budget
  }

  addExpense(description, amount) {
    // defines a method to add an expense
    this.expenses.push({ description, amount });
    // adds new object to expense array with discription and amount
    this.calculateBudget();
    // calls method to recalculate and update total budget
  }

  calculateBudget() {
    const totalIncome = this.income.reduce((acc, curr) => acc + curr.amount, 0);
    //
    const totalExpenses = this.expenses.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    this.totalBudget = totalIncome - totalExpenses;
    // calculates total budget by subtracting expensees from income

    this.updateUI(totalIncome, totalExpenses);
    // calls functtion to refresh the user interface with updated budget
  }

  updateUI(totalIncome, totalExpenses) {
    // function to update the UI with latest budget, income, and expenses
    document.getElementById(
      "total-budget"
    ).textContent = `$${this.totalBudget}`;
    // update the total budget value
    document.getElementById("total-income").textContent = `$${totalIncome}`;
    // update the total income value
    document.getElementById("total-expenses").textContent = `$${totalExpenses}`;
    // update the total expenses value
  }
}

const budget = new Budget();
// creates new instance of the budget class

document.getElementById("add-btn").addEventListener("click", () => {
  // addes an event listener to the "Add" button to handle adding income/expenses
  const description = document.getElementById("description").value;
  //   get the discription input value
  const amount = parseFloat(document.getElementById("amount").value);
  // get the input value and convert it to a floating-point number
  const type = document.getElementById("type").value;
  //   get the selected type (income or expense) from the dropdown

  if (!description || isNaN(amount) || amount <= 0) {
    // validates input to make sure it is not empthy
    alert("Enter valid inputs porfavor :)");
    // sends alert to user to provide valid inputs
    return;
  }

  if (type === "income") {
    // checks the type and add the data to the budget
    budget.addIncome(description, amount);
  } else if (type === "expense") {
    // add the expense to the budget
    budget.addExpense(description, amount);
  }

  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
  //   clear the input fields for description and amount after adding the data
});
// thank you for checking work :)
