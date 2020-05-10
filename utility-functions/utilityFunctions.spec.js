const { expect } = require("chai");
const { dateFormatter, kelvinToCelsius } = require("./utilityFunctions");

describe("dateFormatter", () => {
  it("given an empty argument, returns an empty string", () => {
    expect(dateFormatter()).to.equal("");
  });

  it("returns date in correct format when passed unixtime", () => {
    expect(dateFormatter(1589025600)).to.equal("12:00");
  });
});

describe("kelvinToCelsius", () => {
  it("converts kelvin temperature number to celsius in string type", () => {
    expect(kelvinToCelsius(301.1)).to.equal("28");
    expect(kelvinToCelsius(500)).to.equal("227");
    expect(kelvinToCelsius(600)).to.equal("327");
  });
});
