
$(document).ready(function () {

    // Global variables
    var gemOne;
    var gemTwo;
    var gemThree;
    var gemFour;

    var wins = 0;
    var losses = 0;

    var computerNumber;
    var userScore = 0;

    // This function will randomize the computer choice number and all of the value for each gem
    function gameStart() {
        computerNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log("Computer number is: " + computerNumber);

        gemOne = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 1 number is: " + gemOne);

        gemTwo = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 2 number is: " + gemTwo);

        gemThree = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 3 number is: " + gemThree);

        gemFour = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 4 number is: " + gemFour);

    }

    // Calling the gameStart function
    gameStart();

    // Click event for everytime the images with the gem-buttons class is clicked
    $(".gem-buttons").click(function () {
        var userChoice = $(this).attr("value");
        console.log("User clicked gem #" + userChoice);

        if (userChoice == "1") {
            userScore += gemOne;
        } else if (userChoice == "2") {
            userScore += gemTwo;
        } else if (userChoice == "3") {
            userScore += gemThree;
        } else if (userChoice == "4") {
            userScore += gemFour;
        }
        console.log("User's score is: " + userScore);

        if (userScore > computerNumber) {
            losses++;
            console.log("Losses: " + losses);
            console.log("------------------");
            alert("Didn't win this time. Click a crystal to try again!");
            userScore = 0;
            gameStart();
        } else if (userScore === computerNumber) {
            wins++
            console.log("Wins: " + wins);
            console.log("------------------");
            alert("Really lucky or really good... Doesn't matter. You won!");
            userScore = 0;
            gameStart();
        }

        // Manipulating the DOM to update the scores
        $("#total-score-counter").html("<p>" + userScore + "</p>")
        $("#score-count").html("<p>" + computerNumber + "</p>")
        $("#wins-losses").html("<p>Wins: " + wins + "</p>"
            + "<p>Losses: " + losses + "</p>");


    });










});