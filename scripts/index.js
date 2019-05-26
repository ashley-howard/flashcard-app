// front, back, difficulty (0 = new, 1 = easy, 2 = hard, 3 = incorrect)
var flashcardArr = [
    ["Bello", "Nice", 0],
    ["Casa", "House", 0],
    ["Uomo", "Man", 0]
];

const flashcard = document.getElementById("flashcard");
const flashcardText = document.getElementById("flashcard-text");
const btnGroupStart = document.getElementById("buttons-start");
const btnStart = document.getElementById("btn-start");
const btnGroupDifficulty = document.getElementById("buttons-difficulty");
const btnEasy = document.getElementById("btn-easy");
const btnHard = document.getElementById("btn-hard");
const btnIncorrect = document.getElementById("btn-incorrect");

function startGame(){
    btnGroupStart.style.display = "none";
    btnGroupDifficulty.style.display = "block";

    flashcardText.innerHTML = flashcardArr[0][0];
}


function btn(difficulty) {
    if (difficulty === 'easy') {

    }

    else if (difficulty === 'hard') {

    }

    // incorrect
    else {

    }

}
