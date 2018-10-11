
window.onload = function() {

//("#crystal1").click(randomNumber.crystal1);
//("#crystal2").click(randomNumber.crystal2);
//("#crystal3").click(randomNumber.crystal3);
//("#crystal4").click(randomNumber.crystal4);

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

var randomGen=
    $("#randomGenerated").text(Math.floor(Math.random()*100+19));
// how to console log?

var crystalRandomNumber1=$("#crystal1").text(Math.floor(Math.random()*12+1));
var crystalRandomNumber2=$("#crystal2").text(Math.floor(Math.random()*12+1));
var crystalRandomNumber3=$("#crystal3").text(Math.floor(Math.random()*12+1));
var crystalRandomNumber4=$("#crystal4").text(Math.floor(Math.random()*12+1));

}