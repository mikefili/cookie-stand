var storeOne = {
  name: "First and Pike",
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custPerHour: function(minCust, maxCust) {
    var randCust =  Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    var cookiesPerHour = Math.floor(randCust * this.avgCookies);
    return [randCust, cookiesPerHour];
  }
};

storeOne.custPerHour();