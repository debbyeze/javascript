function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
};
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
};

function letterFinder(word, match){
    for (var i = 0; i< word.length; i++){
        if(word[i] == match){
           console.log('found', match, 'at', i)
           
        }
        else{
           console.log('---No match found at', i)
        }
    }
};

letterFinder("test", "t");


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
};


function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']



var clothes = [];
clothes.push("skirt", "shirt", "trouser", "wrapper", "blouse");
clothes.pop(clothes[4]); 
//  or clothes.pop(); to remove last string
clothes.push("short");
console.log(clothes);

var favCar = {
    color:"red",
    convertible: true
    }
    console.log(favCar);

// or this

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);



var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
