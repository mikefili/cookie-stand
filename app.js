var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];



var storeOne = {
  name: "First and Pike",
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  soldPerHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      // console.log (cookiesPerHour);
      this.soldPerHour.push(cookiesPerHour);
    }
  }
};

storeOne.custPerHour();
console.log(storeOne.soldPerHour);


var storeTwo = {
  name: "SeaTac Airport",
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  soldPerHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      // console.log (cookiesPerHour);
      this.soldPerHour.push(cookiesPerHour);
    }
  }
};

storeTwo.custPerHour();
console.log(storeTwo.soldPerHour);

var storeThree = {
  name: "Seattle Center",
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  soldPerHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      // console.log (cookiesPerHour);
      this.soldPerHour.push(cookiesPerHour);
    }
  }
};

storeThree.custPerHour();
console.log(storeThree.soldPerHour);

var storeFour = {
  name: "Capitol Hill",
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  soldPerHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      // console.log (cookiesPerHour);
      this.soldPerHour.push(cookiesPerHour);
    }
  }
};

storeFour.custPerHour();
console.log(storeFour.soldPerHour);

var storeFive = {
  name: "Alki",
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  soldPerHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      // console.log (cookiesPerHour);
      this.soldPerHour.push(cookiesPerHour);
    }
  }
};

storeFive.custPerHour();
console.log(storeFive.soldPerHour);