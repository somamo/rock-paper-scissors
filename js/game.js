var timer;
var images = document.querySelectorAll(".content img");
var rock = images[0];
var paper = images[1];
var scissors = images[2];

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

rock.addEventListener("click", comparerock, false);
paper.addEventListener("click", comparepaper, false);
scissors.addEventListener("click", comparescissors, false);

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

    var result = document.querySelector(".result");
    var computerresult = document.querySelector(".computerresult");
    var userresult = document.querySelector(".userresult")

    computerresult.innerHTML = "Computer: " + computerChoice;
    userresult.innerHTML = "You: " + userChoice;

    if (computerChoice === userChoice) {
        result.innerHTML = "The result is a tie!";
    }

    else if (computerChoice === "rock") {
        if (userChoice === "scissors") {
            result.innerHTML = "rock wins";
        }
        else {
            result.innerHTML = "paper wins";
        }
    }

    else if (computerChoice === "paper") {
        if (userChoice === "rock") {
            result.innerHTML = "paper wins";
        }
        else {
            result.innerHTML = "scissors wins";
        }
    }

    else if (computerChoice === "scissors") {
        if (userChoice === "rock") {
            result.innerHTML = "rock wins";
        }
        else {
            result.innerHTML = "scissors wins";
        }
    }

    toggleArea();
};

function toggleArea() {
    var content = document.querySelector(".content");
    var counter = document.querySelector(".counterarea");
    var result = document.querySelector(".resultarea");

    if (!result.className.includes("hidden")){
        result.className = "resultarea hidden";
        counter.className = "counterarea hidden";
        content.className = "content";
    } else if (!counter.className.includes("hidden")){
        content.className = "content hidden";
        counter.className = "counterarea hidden";
        result.className = "resultarea";
    } else {
        content.className = "content hidden";
        counter.className = "counterarea";
        result.className = "resultarea hidden";
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
        timer = setInterval(randomCounter, 1000);
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
