const { expect } = require("chai");
const { dateFormatter, kelvinToCelsius } = require("./utilityFunctions");

describe("dateFormatter", () => {
  it("returns date in correct format when passed unixtime", () => {
    expect(dateFormatter(1589025600)).to.equal();
  });
});

describe("kelvinToCelsius", () => {
  it("returns date in correct format when passed unixtime", () => {
    expect(kelvinToCelsius(301.1)).to.equal('28');
  });
});
