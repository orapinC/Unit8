
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// remove a server from the server table via X button
function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  //testing
  
  newTd.className = 'deleteButton';
  newTd.innerText = 'X';
  newTd.addEventListener('click', removeRow);
  tr.append(newTd);
}

function removeRow(e){
  let elemnt = e.target.closest('tr');
  delete allServers[elemnt.id];
  elemnt.parentNode.removeChild(elemnt);
  updateServerTable();
}

//
