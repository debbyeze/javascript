// exam questions
var scores = 10;
var num1 = Math.sqrt(4);
var num2 = Math.cbrt(27);

function getOne(){
    var radios = document.getElementById("one");
    var radioLength = radios.length;
   for(i=0; i < radioLength; i++){
       if(radios[i].checked && radio[i].value== num1){
            consle.log(scores++);
       }else{
           console.log("failed");
       }
       

   }
}