var hoursOfOp = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var stores = [];

function Store(name, min, max, avgPerSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgPerSale = avgPerSale;
  this.cookiesArray = [];
  this.total = 0;
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
  console.log(this.min);
  var cookiesPerHour;
  for (var i = 0; i < hoursOfOp.length; i++) {
    cookiesPerHour = Math.floor(this.randCustCount(this.min, this.max) * this.avgPerSale + 1);
    console.log(cookiesPerHour);
    this.cookiesArray.push(cookiesPerHour);
    this.total += cookiesPerHour;
  }
  return this.cookiesArray;
};

function generateTableHeader(array) {
  var thEl = document.createElement('tbl-head');
  var thrEl = document.createElement('tr');
  thEl.appendChild(thrEl);
  for (var i = 0; i < array.length; i++) {
    var tableHeader = document.createElement('td');
    tableHeader.textContent = array[i];
    thEl.appendChild(tableHeader);
  }
}
generateTableHeader(hoursOfOp);

Store.prototype.render = function () {
  var tbodyEl = document.getElementById('tbl-body');
  var tbrEl = document.createElement('tr');
  tbodyEl.appendChild(tbrEl);
  var tbrLabel = document.createElement('td');
  tbrLabel.textContent = `${this.name}:`;
  tbrEl.appendChild(tbrLabel);
  for (var i = 0; i < this.cookiesArray.length; i++) {
    var tbData = document.createElement('td');
    tbData.textContent = this.cookiesArray[i];
    tbrEl.appendChild(tbData);
  }
  var total = document.createElement('td');
  total.textContent = this.total;
  tbrEl.appendChild(total);
};

var storeOne = new Store ('First and Pike', 23, 65, 6.3);
console.log(storeOne.cookiesArray);
var storeTwo = new Store ('SeaTac Airport', 3, 24, 1.2);
console.log(storeTwo.cookiesArray);
var storeThree = new Store ('Seattle Center', 11, 38, 3.7);
console.log(storeThree.cookiesArray);
var storeFour = new Store ('Capitol Hill', 20, 38, 2.3);
console.log(storeFour.cookiesArray);
var storeFive = new Store ('Alki', 2, 16, 4.6);
console.log(storeFive.cookiesArray);