var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var storeOne = {
  name: "First and Pike",
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custPerHour: function() {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randCust =
        Math.floor(Math.random() * (this.maxCust - this.minCust)) +
        this.minCust;
      var cookiesPerHour = Math.floor(randCust * this.avgCookies);
      console.log ([hoursOfOperation[i], randCust, cookiesPerHour]);
    }
  }
};

storeOne.custPerHour();
