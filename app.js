var storeOne = {
  name: "First and Pike",
  minCust: 23,
  maxCust: 65,
  avgCookies: 23,
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.minCust - this.maxCust) + this.minCust);
  }
};

storeOne.custPerHour();