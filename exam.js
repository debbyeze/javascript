var subject=new Array("Mel Gibson", "Optimus-Prime", "The Cat-lady", "The student", "My        Dentist");

var verb=new Array("licks", "pets", "hugs", "stabs", "eats");

var adj=new Array("fat", "ugly", "delicious", "redundant", "hopeless");

var object=new Array("cat", "bacon-strip", "dog-house", "bigmac", "hobo");


var element1=document.getElementById("btn1");
var element2=document.getElementById("btn2");
var element3=document.getElementById("btn3");
var element4=document.getElementById("btn4");

element1.onclick=function(){

subStr = subject[Math.floor(Math.random()*(subject.length))];
document.getElementById('insubject').value=subStr;
document.getElementById("output").innerHTML= subStr + " " + verbStr + " the " + adjStr + " " + objStr + " .";

}

element2.onclick=function(){

verbStr = verb[Math.floor(Math.random()*(verb.length))];
document.getElementById('verb').value=verbStr;
document.getElementById("output").innerHTML= subStr + " " + verbStr + " the " + adjStr + " " + objStr + " .";
}


 element3.onclick=function(){

adjStr= adj[Math.floor(Math.random()*(adj.length))];
document.getElementById('adj').value=adjStr;
document.getElementById("output").innerHTML= subStr + " " + verbStr + " the " + adjStr + " " + objStr + " .";
}

element4.onclick=function(){

objStr= object[Math.floor(Math.random()*(object.length))];
document.getElementById('object').value=objStr;
document.getElementById("output").innerHTML= subStr + " " + verbStr + " the " + adjStr + " " + objStr + " .";
}