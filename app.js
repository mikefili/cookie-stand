var hoursOfOp = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var stores = [];

function Stores(name, minCust, maxCust, avgPerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.cookiesPerHour = [];
  // this.dailyTotal = dailyTotal;
  this.render();
  stores.push(this);
}

Stores.prototype.generateRandomCustPerHour = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  for (var i = 0; i < this.hoursOfOp.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    // this.custPerHour.push(randomCust);
};

Stores.prototype.generateHourlySales = function () {
  this.generateRandomCustPerHour(this.minCust, this.maxCust);
  for (var i = 0; i < this.hoursOfOp.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgPerSale);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
}

Stores.prototype.render = function () {
  this.generateHourlySales();
  var tbodyEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = `${this.name}:`;
  trEl.appendChild(thEl);

  var nameEl = document.createElement('td');
  var minEl = document.createElement('td');
  var maxEl = document.createElement('td');
  var avCooksEl = document.createElement('td');
  var perHourEl = document.createElement('td');
  var hoursEl = document.createElement('td');

  nameEl.textContent = this.name;
  minEl.textContent = this.minCust;
}

  var ulEl = document.createElement('ul');
  for(var i = 0; i < this.hoursOfOp.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${this.hoursOfOp[i]}: ${this.cookiesPerHour[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  var totalEl = document.createElement('li');
  totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
  ulEl.appendChild(totalEl);
  containerEl.appendChild(ulEl);
  mainEl.appendChild(containerEl);
}

// var storeOne = {
//   name: 'First and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgPerSale: 6.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOfOp: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for (var i = 0; i < this.hoursOfOp.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCust, this.maxCust);
    for (var i = 0; i < this.hoursOfOp.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgPerSale);
      this.cookiesPerHour.push(perHour);
      // this.dailyTotal = this.dailyTotal + perHour; AKA
      this.dailyTotal += perHour;
    }
//   },
//   render: function() {
//     // Line below will generate hourlySales, which also generates custPerHour
//     this.generateHourlySales();
//     // this.hoursOfOp []
//     // this.custPerHour = []
//     // this.cookiesPerHour = []
//     var mainEl = document.getElementById('main-content');
//     var containerEl = document.createElement('section');
//     var headingEl = document.createElement('h3');
//     headingEl.textContent = `${this.name}:`;
//     containerEl.appendChild(headingEl);
//     var ulEl = document.createElement('ul');
//     for(var i = 0; i < this.hoursOfOp.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hoursOfOp[i]}: ${this.cookiesPerHour[i]} cookies`;  // '6am: 23 cookies'
//       ulEl.appendChild(liEl);
//     }
//     var totalEl = document.createElement('li');
//     totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(totalEl);
//     containerEl.appendChild(ulEl);
//     mainEl.appendChild(containerEl);
//   },
// };

// storeOne.render();

// var storeTwo = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerSale: 1.2,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOfOp: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   dailyTotal: 0,
//   generateRandomCustPerHour: function(min, max) {
//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   generateHourlySales: function() {
//     this.generateRandomCustPerHour(this.minCust, this.maxCust);

    // for (var i = 0; i < this.hoursOfOp.length; i++) {
    //   var perHour = Math.round(this.custPerHour[i] * this.avgPerSale);
    //   this.cookiesPerHour.push(perHour);
    //   this.dailyTotal += perHour;
//     }
//   },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
    var headingEl = document.createElement('h3');
    headingEl.textContent = `${this.name}:`;
    containerEl.appendChild(headingEl);
    var ulEl = document.createElement('ul');
    for(var i = 0; i < this.hoursOfOp.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOp[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

// storeTwo.render();

// var storeThree = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerSale: 3.7,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOfOp: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   dailyTotal: 0,
//   generateRandomCustPerHour: function(min, max) {
//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   generateHourlySales: function() {
//     this.generateRandomCustPerHour(this.minCust, this.maxCust);

//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgPerSale);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }
//   },
//   render: function() {
//     this.generateHourlySales();
//     var mainEl = document.getElementById('main-content');
//     var containerEl = document.createElement('section');
//     var headingEl = document.createElement('h3');
//     headingEl.textContent = `${this.name}:`;
//     containerEl.appendChild(headingEl);
//     var ulEl = document.createElement('ul');
//     for(var i = 0; i < this.hoursOfOp.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hoursOfOp[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     var totalEl = document.createElement('li');
//     totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(totalEl);
//     containerEl.appendChild(ulEl);
//     mainEl.appendChild(containerEl);
//   },
// };

// storeThree.render();

// var storeFour = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerSale: 2.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOfOp: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   dailyTotal: 0,
//   generateRandomCustPerHour: function(min, max) {
//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   generateHourlySales: function() {
//     this.generateRandomCustPerHour(this.minCust, this.maxCust);

//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgPerSale);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }
//   },
//   render: function() {
//     this.generateHourlySales();
//     var mainEl = document.getElementById('main-content');
//     var containerEl = document.createElement('section');
//     var headingEl = document.createElement('h3');
//     headingEl.textContent = `${this.name}:`;
//     containerEl.appendChild(headingEl);
//     var ulEl = document.createElement('ul');
//     for(var i = 0; i < this.hoursOfOp.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hoursOfOp[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     var totalEl = document.createElement('li');
//     totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(totalEl);
//     containerEl.appendChild(ulEl);
//     mainEl.appendChild(containerEl);
//   },
// };

// storeFour.render();

// var storeFive = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerSale: 4.6,
//   custPerHour: [],
//   cookiesPerHour: [],
//   hoursOfOp: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   dailyTotal: 0,
//   generateRandomCustPerHour: function(min, max) {
//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   generateHourlySales: function() {
//     this.generateRandomCustPerHour(this.minCust, this.maxCust);

//     for (var i = 0; i < this.hoursOfOp.length; i++) {
//       var perHour = Math.round(this.custPerHour[i] * this.avgPerSale);
//       this.cookiesPerHour.push(perHour);
//       this.dailyTotal += perHour;
//     }
//   },
//   render: function() {
//     this.generateHourlySales();
//     var mainEl = document.getElementById('main-content');
//     var containerEl = document.createElement('section');
//     var headingEl = document.createElement('h3');
//     headingEl.textContent = `${this.name}:`;
//     containerEl.appendChild(headingEl);
//     var ulEl = document.createElement('ul');
//     for(var i = 0; i < this.hoursOfOp.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hoursOfOp[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulEl.appendChild(liEl);
//     }
//     var totalEl = document.createElement('li');
//     totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
//     ulEl.appendChild(totalEl);
//     containerEl.appendChild(ulEl);
//     mainEl.appendChild(containerEl);
//   },
// };

// storeFive.render();