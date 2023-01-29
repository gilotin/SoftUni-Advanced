const carService = require("../03. Car Service_Resources");
const { expect, assert } = require("chai");

describe("carServiceTest", () => {
  describe("isExpensive", () => {
    it("if value of the parameter is equal to Engine", () => {
      expect(carService.isItExpensive("Engine")).to.contain("will cost more money");
    });

    it("if value of the parameter is equal to Transmission", () => {
      expect(carService.isItExpensive("Transmission")).to.contain("will cost more money");
    });

    it("if the above conditions are not met", () => {
      expect(carService.isItExpensive("test")).to.contain("will be a bit cheaper");
    });
  });

  describe("discount", () => {
    it("If numberOfParts are less than two", () => {
      expect(carService.discount(2, 100)).to.contain("You cannot apply a discount");
    });

    it("If parameters are not numbers", () => {
      expect(() => carService.discount("a", 100)).to.throw("Invalid input");
      expect(() => carService.discount(100, "a")).to.throw("Invalid input");
      expect(() => carService.discount("a", "a")).to.throw("Invalid input");
    });

    it("if numberOfParts are more than 2 and have propper discount", () => {
      expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved ${100 * 0.15}$`);
      expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved ${100 * 0.15}$`);
      expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved ${100 * 0.3}$`);
      expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved ${100 * 0.3}$`);
    });
  });

  describe("partsToBuy", () => {
    it("if parameters are not arrays throw error", () => {
      expect(() => carService.partsToBuy([], {})).to.throw("Invalid input");
      expect(() => carService.partsToBuy({}, [])).to.throw("Invalid input");
      expect(() => carService.partsToBuy("a", [])).to.throw("Invalid input");
      expect(() => carService.partsToBuy([], "a")).to.throw("Invalid input");
      expect(() => carService.partsToBuy([], 1)).to.throw("Invalid input");
      expect(() => carService.partsToBuy(1, [])).to.throw("Invalid input");
      expect(() => carService.partsToBuy([])).to.throw("Invalid input");
    });

    it("If partsCatalog is empty return 0", () => {
      expect(carService.partsToBuy([{}, {}], [{ part: "coil springs", price: 230 }])).to.equal(0);
    });

    it("If catalogue has needed parts", () => {
      expect(
        carService.partsToBuy(
          [
            { part: "coil springs", price: 230 },
            { part: "blowoff valve", price: 145 },
          ],
          ["coil springs", "blowoff valve"]
        )
      ).to.equal(375);
    });
  });
});

// describe("Tests carService", function () {
//     describe("isItExpensive", function () {
//       it("TEST - determine the issue", function () {
//         let message =
//           "The issue with the car is more severe and it will cost more money";
//         assert.equal(carService.isItExpensive("Engine"), message);
//         assert.equal(carService.isItExpensive("Transmission"), message);
//         assert.equal(
//           carService.isItExpensive("bumper"),
//           "The overall price will be a bit cheaper"
//         );
//         assert.equal(
//           carService.isItExpensive("wheel drive"),
//           "The overall price will be a bit cheaper"
//         );
//       });
//     });
//     describe("discount", () => {
//       it("TEST - IF data is not valid type", () => {
//         assert.throw(() => carService.discount("a", 1), "Invalid input");
//         assert.throw(() => carService.discount(1, "a"), "Invalid input");
//         assert.throw(() => carService.discount("a", "a"), "Invalid input");
//       });
//       it("TEST - IF discount is applied", () => {
//         assert.equal(
//           carService.discount(7, 100),
//           `Discount applied! You saved ${100 * 0.15}$`
//         );
//         assert.equal(
//           carService.discount(3, 100),
//           `Discount applied! You saved ${100 * 0.15}$`
//         );
//         assert.equal(
//           carService.discount(8, 100),
//           `Discount applied! You saved ${100 * 0.3}$`
//         );
//         assert.equal(
//           carService.discount(10, 100),
//           `Discount applied! You saved ${100 * 0.3}$`
//         );
//       });
//       it("TEST - IF discount is not applied", () => {
//         assert.equal(carService.discount(2, 50), "You cannot apply a discount");
//       });
//     });
//     describe("partsToBuy", () => {
//       it("TEST - IF invalid DATA is passed", () => {
//         assert.throws(() => carService.partsToBuy([], {}), "Invalid input");
//         assert.throws(() => carService.partsToBuy({}, []), "Invalid input");
//         assert.throws(() => carService.partsToBuy([], "a"), "Invalid input");
//         assert.throws(() => carService.partsToBuy("a", []), "Invalid input");
//         assert.throws(() => carService.partsToBuy([], 1), "Invalid input");
//         assert.throws(() => carService.partsToBuy(1, []), "Invalid input");
//         assert.throws(() => carService.partsToBuy([]), "Invalid input");
//       });
//       it("TEST - IF catalogue is empty", () => {
//         assert.equal(
//           carService.partsToBuy([{}, {}], [{ part: "coil springs", price: 230 }]),
//           0
//         );
//       });
//       it("TEST - IF catalogue has needed parts", () => {
//         assert.equal(
//           carService.partsToBuy(
//             [{ part: "coil springs", price: 230 }, { part: "blowoff valve", price: 145 }],
//             ["coil springs", "blowoff valve"]
//           ),
//           375
//         );
//       });
//     });
//   });
