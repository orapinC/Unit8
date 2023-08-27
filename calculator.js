window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    let monthly = setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {

  // Put some default values in the inputs
  const loanDatas = { amount: '10000.00', years: '10.00', rate: '10'};

  // Put loanDatas on Webpage
  const amountUI = document.querySelector("#loan-amount");
  amountUI.value = loanDatas.amount;
  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = loanDatas.years;
  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = loanDatas.rate;

  // Call a function to calculate the current monthly payment
  let monthly = calculateMonthlyPayment(loanDatas.amount, loanDatas.years, loanDatas.rate);
  updateMonthly(monthly);
}

function update() {
// Get the current values from the UI
const loanDatas = getCurrentUIValues();
let amount = loanDatas.amount;
let years = loanDatas.years;
let rate = loanDatas.rate;
// Update the monthly payment
let monthly = calculateMonthlyPayment(amount, years, rate);
updateMonthly(monthly);
}


function calculateMonthlyPayment(amount, years, rate) {
// Given an object of values (a value has amount, years and rate ),
let loanDatas = {amount: "0", years: "0", rate: "0"};
loanDatas.amount = amount;
loanDatas.years = years;
loanDatas.rate = rate;

// calculate the monthly payment.  The output should be a string
let P = parseFloat(loanDatas.amount);
let n = parseFloat(loanDatas.years) * 12.0;
let i = parseFloat(loanDatas.rate) / (100*12.0);
let monthly = (P * i)/(1.0 - ((1.0 + i)**(-n)));
// trancated monthly payment to two decimal value
monthly = monthly * 100;
monthly = Math.trunc(monthly);
monthly = monthly/100;
// that always has 2 decimal places.
  return monthly;
}


function updateMonthly(monthly) {
// Given a string representing the monthly payment value.
let monthlyPayment = `${monthly} dollars`;

// update the UI to show the value.
const monthlyUI = document.querySelector("#monthly-payment");
monthlyUI.innerText = monthlyPayment;
}
