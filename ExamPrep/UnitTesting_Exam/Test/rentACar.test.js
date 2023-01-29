const rentCar = require("../rentCar");
const { expect } = require("chai");

describe("rentCar", () => {
  describe("searchCar", () => {
    it("Checking if the car model is present in the shop", () => {
      expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW")).to.equal(
        `There is 1 car of model BMW in the catalog!`
      );
    });

    it("If there are no matching elements throw an error", () => {
      expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Lada")).to.throw(
        "There are no such models in the catalog!"
      );
    });
    it("Checks parameters type if they are correct", () => {
      // parameters are [array] and 'string'
      expect(() => rentCar.searchCar("", [])).to.throw("Invalid input!");
      expect(() => rentCar.searchCar(1, "")).to.throw("Invalid input!");
      expect(() => rentCar.searchCar({}, "")).to.throw("Invalid input!");
      expect(() => rentCar.searchCar([], 1)).to.throw("Invalid input!");
      expect(() => rentCar.searchCar([], {})).to.throw("Invalid input!");
      expect(() => rentCar.searchCar("", "")).to.throw("Invalid input!");
      expect(() => rentCar.searchCar([], [])).to.throw("Invalid input!");
    });
  });
  describe("calculatePriceOfCar", () => {
    it("Checks parameters type if they are correct", () => {
      // parameters are '' and number
      expect(() => rentCar.calculatePriceOfCar(1, "")).to.throw("Invalid input!");
      expect(() => rentCar.calculatePriceOfCar("", "")).to.throw("Invalid input!");
      expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw("Invalid input!");
      expect(() => rentCar.calculatePriceOfCar([], 1)).to.throw("Invalid input!");
      expect(() => rentCar.calculatePriceOfCar('', [])).to.throw("Invalid input!");
    });

    it("Check if function work properly with given parameters", () => {
      expect(rentCar.calculatePriceOfCar("Volkswagen", 5)).to.contain(
        "You choose Volkswagen and it will cost $100!"
      );
    });

    it("Check if function throw an error with non-existent car", () => {
      expect(() => rentCar.calculatePriceOfCar("Lada", 1)).to.throw(
        "No such model in the catalog!"
      );
      expect(() => rentCar.calculatePriceOfCar("Lada", 0)).to.throw(
        "No such model in the catalog!"
      );
    });
  });
    describe("checkBudget", () => {
      it("If parameters are invalid throw an error", () => {
        // accept three numbers
        expect(() => rentCar.checkBudget(1, 1, "")).to.throw("Invalid input!");
        expect(() => rentCar.checkBudget(1, "", "")).to.throw("Invalid input!");
        expect(() => rentCar.checkBudget("", "", "")).to.throw("Invalid input!");
        expect(() => rentCar.checkBudget("", 1, 1)).to.throw("Invalid input!");
        expect(() => rentCar.checkBudget("", "", 1)).to.throw("Invalid input!");
        expect(() => rentCar.checkBudget(1, "", 1)).to.throw("Invalid input!");
      });

      it("Check if budged is bigger than the cost", () => {
        expect(rentCar.checkBudget(1, 1, 2)).to.equal("You rent a car!");
        expect(rentCar.checkBudget(2, 1, 2)).to.equal("You rent a car!");
      });

      it("Check if budged is lower than the cost", () => {
        expect(rentCar.checkBudget(2, 1, 1)).to.equal("You need a bigger budget!");
      });
    });
});
