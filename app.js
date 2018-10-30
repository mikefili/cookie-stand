var storeOne = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCust, this.maxCust);
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(perHour);
      // this.dailyTotal = this.dailyTotal + perHour; AKA
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourlySales, which also generates custPerHour
    this.generateHourlySales();
    // this.hoursOfOperation []
    // this.custPerHour = []
    // this.cookiesPerHour = []
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
    var headingEl = document.createElement('h3');
    headingEl.textContent = `${this.name}:`;
    containerEl.appendChild(headingEl);
    var ulEl = document.createElement('ul');
    for(var i = 0; i < this.hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;  // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

storeOne.render();

var storeTwo = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCust, this.maxCust);

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
    var headingEl = document.createElement('h3');
    headingEl.textContent = `${this.name}:`;
    containerEl.appendChild(headingEl);
    var ulEl = document.createElement('ul');
    for(var i = 0; i < this.hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

storeTwo.render();

var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCust, this.maxCust);

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
    var headingEl = document.createElement('h3');
    headingEl.textContent = `${this.name}:`;
    containerEl.appendChild(headingEl);
    var ulEl = document.createElement('ul');
    for(var i = 0; i < this.hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

storeThree.render();

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCust, this.maxCust);

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
    var headingEl = document.createElement('h3');
    headingEl.textContent = `${this.name}:`;
    containerEl.appendChild(headingEl);
    var ulEl = document.createElement('ul');
    for(var i = 0; i < this.hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

storeFour.render();

var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    this.generateRandomCustPerHour(this.minCust, this.maxCust);

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    this.generateHourlySales();
    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');
    var headingEl = document.createElement('h3');
    headingEl.textContent = `${this.name}:`;
    containerEl.appendChild(headingEl);
    var ulEl = document.createElement('ul');
    for(var i = 0; i < this.hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);
    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

storeFive.render();