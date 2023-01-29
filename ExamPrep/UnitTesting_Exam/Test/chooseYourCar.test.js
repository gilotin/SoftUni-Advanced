const chooseYourCar = require("../midExamOctober22/chooseYourCar");
const { expect } = require("chai");

describe("chooseYourCar", () => {
  describe("choosingType", () => {
    it("If the year is less than 1900 and more than 2022, throw an error", () => {
      expect(() => chooseYourCar.choosingType("", "", 1899)).to.throw("Invalid Year!");
      expect(() => chooseYourCar.choosingType("", "", 2023)).to.throw("Invalid Year!");
    });
    it("If value of the type is different than sedan throw an error", () => {
      expect(() => chooseYourCar.choosingType("van", "", 2000)).to.throw(
        "This type of car is not what you are looking for."
      );
      expect(() => chooseYourCar.choosingType("cabriolette", "", 2000)).to.throw(
        "This type of car is not what you are looking for."
      );
      expect(() => chooseYourCar.choosingType("hatchback", "", 2000)).to.throw(
        "This type of car is not what you are looking for."
      );
    });
    it("the car meets criteria for type and year must be 2010 or greater", () => {
      expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
      expect(chooseYourCar.choosingType("Sedan", "red", 2011)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
      expect(chooseYourCar.choosingType("Sedan", "red", 2022)).to.equal(
        "This red Sedan meets the requirements, that you have."
      );
    });
    it("the car dont  meets the criteria for type and year", () => {
      expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal(
        "This Sedan is too old for you, especially with that red color."
      );
    });
  });
  describe("brandName", () => {
    it("If the parameters are not array and number, throw an Error", () => {
      expect(() => chooseYourCar.brandName([], [])).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(1, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName({}, {})).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName("", "")).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName([], "")).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName([], {})).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName({}, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName("", 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName(1, [])).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName([1], -1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.brandName([1, 2], 2)).to.throw("Invalid Information!");
    });
    it("after manipulation we have to recive a string joined by coma and space", () => {
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal("Toyota, Peugeot");
      expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal("BMW, Toyota");
    });
  });
  describe("CarFuelConsumption", () => {
    it("If parameters not meet the criteria, throw an Error", () => {
      expect(() => chooseYourCar.carFuelConsumption([], [])).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption({}, {})).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption("", "")).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, "")).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, [])).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, {})).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption([], 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption("", 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption({}, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw("Invalid Information!");
      expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw("Invalid Information!");
    });
    it("if the consumption of the fuel is less or equal to 7l per 100km", () => {
      expect(chooseYourCar.carFuelConsumption(10, 0.7)).to.equal(
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
      expect(chooseYourCar.carFuelConsumption(10, 0.69)).to.equal(
        "The car is efficient enough, it burns 6.90 liters/100 km."
      );
    });
    it("if fuel consumption criteria is not met", () => {
      expect(chooseYourCar.carFuelConsumption(10, 0.71)).to.equal(
        "The car burns too much fuel - 7.10 liters!"
      );
    });
  });
});
