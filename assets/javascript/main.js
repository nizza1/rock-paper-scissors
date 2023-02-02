
//scoreOutput
const resultsText = document.querySelector(".resultsText")
//scoreOutput

const buttons = document.querySelectorAll(".buttons")

let compPick = "";
let userPick = "";
let userScore= 0;
let compScore= 0;

//COMP
const compPlay= () => {
    const randomNumber = Math.floor(Math.random() * 3) +1;
    switch(randomNumber) {
        case 1:
            compPick = "rock"
        break;
        case 2:
            compPick = "paper"
        break;
        case 3:
            compPick = "scissors"
        break;
    }
    }
//COMP

//USER
buttons.forEach(button => button.addEventListener("click",(e) => {
userPick = e.target.value
compPlay();
checkWinner();
}))
//USER

//Output
checkWinner = () => {
    if(userPick == compPick) {
        return resultsText.innerHTML = `<span>try again</span>`
    }
    else if (userPick == "rock" && compPick == "scissors" || userPick == "paper" && compPick == "rock") {userScore ++}
    else {compScore ++}
    return resultsText.innerHTML = userScore + " / " + compScore;
}
//Output


//////  Noch nicht fertig   /////


