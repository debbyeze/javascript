// Contrary to objects, arrays are iterable. For example:  
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
};




/*Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.

But how?

Before you can properly answer this question, you first need to review three built-in methods: Object.keys(), Object.values(), and Object.entries().

Built-in methods
The Object.keys() method
The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the Object.keys() method.

Here's an example of running the Object.keys() method on a brand new car2 object:*/

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


//For object.values();
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


//For object.entries()
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}

