
//window.onload = function() {
$(document).ready(function () {
    //("#crystal1").click(randomNumber.crystal1);
    //("#crystal2").click(randomNumber.crystal2);
    //("#crystal3").click(randomNumber.crystal3);
    //("#crystal4").click(randomNumber.crystal4);
    // or try .append
    var crystal1 = (Math.floor(Math.random() * 12 + 1));
    var crystal2 = (Math.floor(Math.random() * 12 + 1));
    var crystal3 = (Math.floor(Math.random() * 12 + 1));
    var crystal4 = (Math.floor(Math.random() * 12 + 1));
    //var crystalNumbers = [crystalStart1, crystalStart2, crystalStart3, crystalStart4];

    //var numbersMatch = false;
    //var crystalPressed = false;
    //var changeNumberWhenPressed = false;
    var randomGen = Math.floor(Math.random() * 100 + 19);
    $("#randomGenerated").text(randomGen);
    console.log(randomGen);

    //var totalSum = 0;
    var currentSum = 0;
    var wins = "";
    var losses = "";
    // how to console log?


    //var crystalRandomNumber=(Math.floor(Math.random()*12+1));

    //$(".crystal").on("click", function() {
    //    var crystalRandomNumber=0+(Math.floor(Math.random()*12+1));
    //    console.log(crystalRandomNumber);
    //});
    //event.target ---- look up

    $(".crystal").on("click", function (event) {
        var numbersMatch = false;
        console.log(event.target.id);
        if (event.target.id === "crystal1") {
            currentSum += crystal1;
            console.log(currentSum);
        }if (event.target.id === "crystal2") {
            currentSum += crystal2;
            console.log(currentSum);
        }if (event.target.id === "crystal3") {
            currentSum += crystal3;
            console.log(currentSum);
        }if (event.target.id === "crystal4") {
            currentSum += crystal4;
            console.log(currentSum);
        }$("#numbersAdded").text(currentSum);


    });

    // if (currentSum === randomGen) {
    //     wins++;
    //     $("#wins").text(wins);
    // } if (totalSum > randomGen) {
    //     losses++;
    //     $("#losses").text(losses);
    // } if (totalSum < randomGen) {
    //     $(".crystal").on("click", { x: i }, function () {
    //         currentSum = totalSum + indexOf(crystalArray);
    //         $("#yourScore").text(currentSum);
    //     });
    // };

});

