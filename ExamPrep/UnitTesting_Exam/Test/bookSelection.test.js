const bookSelection = require("../03.bookSelection");
const { expect } = require("chai");

describe("bookSelection", () => {
  describe("isGenreSuitable", () => {
    it("If genre is Thriller and age is less or equal than 12", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.contain("not suitable for kids");
    });
    it("If genre is Horror and age is less or equal than 12", () => {
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.contain("not suitable for kids");
    });
    it("If genre is Thriller and age is bigger than 12", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 13)).to.contain("Those books are suitable");
    });
    it("If genre is Horror and age  is bigger than 12", () => {
      expect(bookSelection.isGenreSuitable("Horror", 13)).to.contain("Those books are suitable");
    });
  });
  describe("isItAffordable", () => {
    it("if you dont have budget for the book", () => {
      expect(bookSelection.isItAffordable(10, 9)).to.contain("You don't have enough money");
    });
    it("If you have the money for the book", () => {
      expect(bookSelection.isItAffordable(1, 5)).to.contain(`Book bought. You have ${4}$ left`);
    });
    it('if parameteres are not numbers', ()=>{
        expect(() => bookSelection.isItAffordable('',1)).to.throw('Invalid input');
        expect(() => bookSelection.isItAffordable(1,'')).to.throw('Invalid input');
        expect(() => bookSelection.isItAffordable([],1)).to.throw('Invalid input');
        expect(() => bookSelection.isItAffordable(1,[])).to.throw('Invalid input');
        expect(() => bookSelection.isItAffordable(1,{})).to.throw('Invalid input');
        expect(() => bookSelection.isItAffordable({},1)).to.throw('Invalid input');
        expect(() => bookSelection.isItAffordable()).to.throw('Invalid input');
    })
  });
  describe("suitableTitles", () => {
    it('if parameters are not string array and string',()=>{
        expect(() => bookSelection.suitableTitles('',[])).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles({},'')).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles([],{})).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles(1,'')).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles([],1)).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles('','')).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles([],[])).to.throw("Invalid input")
        expect(() => bookSelection.suitableTitles({},{})).to.throw("Invalid input")
    })
    it('books genre must be equal to wantedGenre',()=>{
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },{ title: "Until Dawn", genre: "Horror" }],"Horror")).to.deep.equal(["Until Dawn"])
    });
  });
});
