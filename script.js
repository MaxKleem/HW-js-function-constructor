function Hamburger(burger) {

    this.price = burger.price;
    this.calories = burger.calories;

    this.getPrice = function () {
        return this.price;
    };
    this.getCalories = function () {
        return this.calories;
    };

    this.addModifier = function (modifier) {
        this.price += modifier.price;
        this.calories += modifier.calories;
    }
}


const Small = {
    size: "small",
    price: 50,
    calories: 20,
};
const Medium = {
    size: "medium",
    price: 75,
    calories: 30,
};
const Big = {
    size: "big",
    price: 100,
    calories: 40,
};
const cheese = {
    type: "cheese",
    price: 10,
    calories: 20,
};
const salad = {
    type: "salad",
    price: 20,
    calories: 5,
};
const potato = {
    type: "potato",
    price: 15,
    calories: 10,
};
const flavoring = {
    type: "flavoring",
    price: 15,
    calories: 0,
};
const mayo = {
    type: "mayo",
    price: 20,
    calories: 5,
};

let hamburgerSmall = new Hamburger(Small);
let hamburgerMedium = new Hamburger(Medium);
let hamburgerBig = new Hamburger(Big);

hamburgerSmall.addModifier(mayo);
hamburgerSmall.addModifier(cheese);
console.log("Price with additives: " + hamburgerSmall.getPrice());
console.log("Callories with additives: " + hamburgerSmall.getCalories());

console.log("Callories: " + hamburgerSmall.getCalories());
console.log("Price: " + hamburgerMedium.getPrice());