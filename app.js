var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var storeOne = {
  name: "First and Pike",
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  openHours: [],
  custPerHour: function custPerHour() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      console.log ([hoursOfOperation[i], randCust, cookiesPerHour]);
    }
  }
};

storeOne.custPerHour();

var storeTwo = {
  name: "SeaTac Airport",
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  openHours: [],
  custPerHour: function custPerHour() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      console.log ([hoursOfOperation[i], randCust, cookiesPerHour]);
    }
  }
};

storeTwo.custPerHour();

var storeThree = {
  name: "Seattle Center",
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  openHours: [],
  custPerHour: function custPerHour() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      console.log ([hoursOfOperation[i], randCust, cookiesPerHour]);
    }
  }
};

storeThree.custPerHour();

var storeFour = {
  name: "Capitol Hill",
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  openHours: [],
  custPerHour: function custPerHour() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      console.log ([hoursOfOperation[i], randCust, cookiesPerHour]);
    }
  }
};

storeFour.custPerHour();

var storeFive = {
  name: "Alki",
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  openHours: [],
  custPerHour: function custPerHour() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      console.log ([hoursOfOperation[i], randCust, cookiesPerHour]);
    }
  }
};

storeFive.custPerHour();