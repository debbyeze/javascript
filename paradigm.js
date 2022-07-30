/* "There are actually several styles of coding, also known as paradigms. A common style is called functional programming and object oriented programming, or FP for short.*/

// In functional programming, we use a lot of functions and variables. example:

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);



function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));






//  object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects. example:

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy);




class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"



function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}