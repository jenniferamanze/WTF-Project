// Expense Calculator

// Sample values 
let monthlyIncome = 2000000;
let dailyExpenses = 203023;
let monthlyExpenses = 3543545;
let savings = 324342;
let spendings = 232323;

// Calculate total expenses
let totalExpenses = dailyExpenses + monthlyExpenses + savings + spendings;

// Calculate what's left
let balance = monthlyIncome - totalExpenses;

// Print results
console.log("Monthly Income:", monthlyIncome);
console.log("Daily Expenses:", dailyExpenses);
console.log("Monthly Expenses:", monthlyExpenses);
console.log("Savings:", savings);
console.log("Spendings:", spendings);
console.log("------------------------");
console.log("Final Balance (Leftover):", balance);
