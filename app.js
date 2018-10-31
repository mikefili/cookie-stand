var hoursOfOp = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// var hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var stores = [];

function Store(name, min, max, avgPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgPerSale = avgPerSale;
  this.cookieSales = [];
  this.totalSales = 0;
  // this.hourlyTotals = 0;
  this.generateHourlySales();
  this.render();
  stores.push(this);
}

Store.prototype.randCustCount = function (min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
  return randomCust;
};

Store.prototype.generateHourlySales = function () {
  // console.log(this.min);
  var cookiesPerHour;
  for (var i = 0; i < hoursOfOp.length; i++) {
    cookiesPerHour = Math.floor(this.randCustCount(this.min, this.max) * this.avgPerSale + 1);
    // console.log(cookiesPerHour);
    this.cookieSales.push(cookiesPerHour);
    this.totalSales += cookiesPerHour;
  }
  return this.cookieSales;
};

function generateTableHeader(array) {
  var thEl = document.getElementById('thead');
  var thrEl = document.createElement('td');
  thEl.appendChild(thrEl);
  thrEl.textContent = 'Location';
  for (var i = 0; i < hoursOfOp.length; i++) {
    var tableHeader = document.createElement('td');
    tableHeader.textContent = array[i];
    thEl.appendChild(tableHeader);
  }
  var dailyTotals = document.createElement('td');
  thEl.appendChild(dailyTotals);
  dailyTotals.textContent = 'Daily Location Total';
}
generateTableHeader(hoursOfOp);

Store.prototype.render = function () {
  var tbodyEl = document.getElementById('tbody');
  var tbrEl = document.createElement('tr');
  tbodyEl.appendChild(tbrEl);
  var tbrLabel = document.createElement('th');
  tbrLabel.textContent = this.name;
  tbrEl.appendChild(tbrLabel);
  for (var i = 0; i < this.cookieSales.length; i++) {
    var tbData = document.createElement('td');
    tbData.textContent = this.cookieSales[i];
    tbrEl.appendChild(tbData);
  }
  var total = document.createElement('td');
  total.textContent = this.totalSales;
  tbrEl.appendChild(total);
  // console.log(total);
};

function generateTableFooter() {
  var tfEl = document.getElementById('tfoot');
  var tfrEl = document.createElement('td');
  tfEl.appendChild(tfrEl);
  tfrEl.textContent = 'Total';
  for (var i = 0; i < hoursOfOp.length; i++) {
    var tableFooter = document.createElement('td');
    tableFooter.textContent = this.hourlyTotals;
    tfEl.appendChild(tableFooter);
  }
  var dailyTotals = document.createElement('td');
  tfEl.appendChild(dailyTotals);
  dailyTotals.textContent = 'Grand Total';
}
generateTableFooter();

var storeOne = new Store ('First and Pike', 23, 65, 6.3);
console.log(storeOne.cookieSales);
var storeTwo = new Store ('SeaTac Airport', 3, 24, 1.2);
console.log(storeTwo.cookieSales);
var storeThree = new Store ('Seattle Center', 11, 38, 3.7);
console.log(storeThree.cookieSales);
var storeFour = new Store ('Capitol Hill', 20, 38, 2.3);
console.log(storeFour.cookieSales);
var storeFive = new Store ('Alki', 2, 16, 4.6);
console.log(storeFive.cookieSales);

var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  var locationInput = event.target.locationInput.value;
  var minInput = event.target.minInput.value;
  var maxInput = event.target.maxInput.value;
  var avgCookiesInput = event.target.avgCookiesInput.value;

  var newStore = document.createElement('tr');
  var minNumber = document.createElement('p');
  var maxNumber = document.createElement('p');
  var avgCookiesPer = document.createElement('p');

  newStore.textContent = locationInput;
  minNumber.textContent = minInput;
  maxNumber.textContent = maxInput;
  avgCookiesPer.textContent = avgCookiesInput;

  // var resultsEl = document.getElementById('results');
  // resultsEl.appendChild(newStore);
  // resultsEl.appendChild(minNumber);
  // resultsEl.appendChild(maxNumber);
  // resultsEl.appendChild(avgCookiesPer);

  event.target.store = new Store (locationInput, minInput, maxInput, avgCookiesInput);
  console.log();

  event.target.locationInput.value = '';
  event.target.minInput.value = '';
  event.target.maxInput.value = '';
  event.target.avgCookiesInput.value = '';
});