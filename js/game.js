var timer;
var images = document.querySelectorAll(".shapes button");
var rock = images[0];
var paper = images[1];
var scissors = images[2];
var userscore = 0;
var computerscore = 0;
var userscoreDisplay = document.querySelector(".user-score");
var computerscoreDisplay = document.querySelector(".computer-score");
var reset = document.querySelector(".reset");

reset.addEventListener("click", resetScore, false);
rock.addEventListener("click", comparerock, false);
paper.addEventListener("click", comparepaper, false);
scissors.addEventListener("click", comparescissors, false);

function computerChoice() {

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
    	return "rock";
    } else if (computerChoice <= 0.67) {
    	return "paper";
    } else {
    	return "scissors";
    }
};

function comparerock(ev) {
    compare("rock", computerChoice());
};

function comparepaper(ev) {
    compare("paper", computerChoice());
};

function comparescissors(ev) {
    compare("scissors", computerChoice());
};

function compare(userChoice, computerChoice) {
    var resultreason = document.querySelector(".result-reason");
    var result = document.querySelector(".result");
    var computerresult = document.querySelector(".computerresult");
    var userresult = document.querySelector(".userresult");

    computerresult.innerHTML = 'Computer <img src="img/' + computerChoice + '.png"></img>';
    userresult.innerHTML = 'You <img src="img/' + userChoice + '.png"></img>';

    if (computerChoice === userChoice) {
        resultreason.innerHTML = "";
        result.innerHTML = "The result is a tie!";
    }

    else if (computerChoice === "rock") {
        if (userChoice === "scissors") {
            resultreason.innerHTML = "Rock smashes scissors.";
            result.innerHTML = "Computer wins :-(";
            computerscore++;
        }
        else {
            resultreason.innerHTML = "Paper wraps rock."
            result.innerHTML = "You win :-)";
            userscore++;
        }
    }

    else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            resultreason.innerHTML = "Paper wraps rock."
            result.innerHTML = "Computer wins :-(";
            computerscore++;
        }
        else {
            resultreason.innerHTML = "Scissors cut paper."
            result.innerHTML = "You win :-)";
            userscore++;
        }
    }

    else if (computerChoice === "scissors") {
        if (userChoice === "rock") {
            resultreason.innerHTML = "Rock smashes scissors."
            result.innerHTML = "You win :-)";
            userscore++;
        }
        else {
            resultreason.innerHTML = "Scissors cut paper."
            result.innerHTML = "Computer wins :-(";
            computerscore++;
        }
    }

    toggleArea();
};

function toggleArea() {
    var shapes = document.querySelector(".shapes");
    var counter = document.querySelector(".counter");
    var result = document.querySelector(".results");

    if (!result.className.includes("hidden")){
        result.className = "results hidden";
        counter.className = "counter hidden";
        shapes.className = "shapes";
    } else if (!counter.className.includes("hidden")){
        shapes.className = "shapes hidden";
        counter.className = "counter hidden";
        result.className = "results";
        computerscoreDisplay.innerHTML = computerscore;
        userscoreDisplay.innerHTML = userscore;
    } else {
        shapes.className = "shapes hidden";
        counter.className = "counter";
        result.className = "results hidden";
        randomCounter();
    };
};

var start = document.querySelector(".playagain");
start.addEventListener("click", playAgain, false);

function playAgain(ev) {
    toggleArea();
};

function randomCounter() {
    var random = document.querySelector(".random");

    if (random.innerHTML === ""){
        random.innerHTML = "1";
        random.className = "random";
        timer = setInterval(randomCounter, 700);
    } else if (random.innerHTML === "1") {
        random.innerHTML = "2";
    } else if (random.innerHTML === "2"){
        random.innerHTML = "3";
    } else {
        random.innerHTML = "";
        clearInterval(timer);
        toggleArea();
    }
};

function resetScore() {
        userscore = 0;
        computerscore = 0;
        computerscoreDisplay.innerHTML = computerscore;
        userscoreDisplay.innerHTML = userscore;
}
