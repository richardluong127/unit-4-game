
$(document).ready(function () {

    var currentSum = 0;
    var wins = 0;
    var losses = 0;

    var crystal1 = (Math.floor(Math.random() * 12 + 1));
    var crystal2 = (Math.floor(Math.random() * 12 + 1));
    var crystal3 = (Math.floor(Math.random() * 12 + 1));
    var crystal4 = (Math.floor(Math.random() * 12 + 1));

    var randomGen = Math.floor(Math.random() * 100 + 19);
    $("#randomGenerated").text("Can You Collect " + randomGen + " Crystals?");
    console.log(randomGen);

    function resetGame() {
        crystal1 = (Math.floor(Math.random() * 12 + 1));
        crystal2 = (Math.floor(Math.random() * 12 + 1));
        crystal3 = (Math.floor(Math.random() * 12 + 1));
        crystal4 = (Math.floor(Math.random() * 12 + 1));

        currentSum = 0;

        randomGen = Math.floor(Math.random() * 100 + 19);
        $("#randomGenerated").text("Can You Collect " + randomGen  + " Crystals?");
        console.log(randomGen);
    };
    $(".crystal").on("click", function (event) {
        var numbersMatch = false;
        console.log(event.target.id);
        if (event.target.id === "crystal1") {
            currentSum += crystal1;
            console.log(currentSum);
        } if (event.target.id === "crystal2") {
            currentSum += crystal2;
            console.log(currentSum);
        } if (event.target.id === "crystal3") {
            currentSum += crystal3;
            console.log(currentSum);
        } if (event.target.id === "crystal4") {
            currentSum += crystal4;
            console.log(currentSum);
        }
        $("#numbersAdded").text(currentSum);
        if (currentSum > randomGen) {
            losses++;
            resetGame();
            $("#losses").text("Losses: " + losses);
            $("#youWinOrLose").text("Game Over.  Try Again?");
        } if (currentSum === randomGen) {
            wins++;
            $("#wins").text("Wins: " + wins);
            $("#youWinOrLose").text("Victory!  Perfect Collection!");
            resetGame();
        }
    })
});

