for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
};

for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
};

for(var i = 1; i <=10; i++){
    if(i==1){
        console.log("Gold medal")
    }
    else if(i == 2){
        console.log("Silver medal")
    }
    else if(i == 3){
        console.log("Bronze")
    }
    else{
        console.log(i)
    }
};

//alternatively use switch
for(var i = 1; i <=10; i++){
    switch(i){
        case 1:
        console.log("Gold");
        break;
         case 2:
        console.log("Bronze");
        break;
         case 3:
        console.log("Silver");
        break;
        default:
        console.log(i);
    }
}

var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
};

for (i = 0; i < 2; i++) {
      for (var j = 0; j < 3; j++){
         console.log("hello")
      };
};