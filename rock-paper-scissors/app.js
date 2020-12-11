userScore = 0;
computerScore = 0;
round = 5;
userScore_span = document.getElementById("user-score");
computerScore_span = document.getElementById("computer-score");
roundCount_span = document.getElementById("round-count");
result_div = document.querySelector(".result > p")
rock_div = document.getElementById("r");
paper_div = document.getElementById("p");
scissor_div = document.getElementById("s");

function roundNum() {
    round--;
    roundCount_span.innerHTML = round;
}

function translate(letter){
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    else return 'Scissor';
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    var userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${translate(userChoice)} beats ${translate(computerChoice)} V`;
    
}
function lost(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    var userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${translate(userChoice)} loses to ${translate(computerChoice)} X`;
}
function draw(userChoice, computerChoice) {
    var userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = `${translate(userChoice)} is equal to ${translate(computerChoice)}`;
}

function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum]; 
}

function game(userChoice) {
    computerChoice = getComputerChoice();
    roundNum();

    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lost(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissor_div.addEventListener('click', () => game('s'));
}
main();

/*
****** Faltam as animações **********
destacar a escolha e manter
esperar um tempo
destacar a escolha do computador
dar o resultado
resetar animação
configurar o game over!
*/