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

function startGame() {
    btnGroupStart.style.display = "none";
    btnGroupDifficulty.style.display = "block";

    var num1 = 0;
    var num2 = 0;

    // Load first item from array
    flashcardText.innerHTML = flashcardArr[num1][num2];

    // clicking on flashcard shows other side
    flashcard.addEventListener("click", flipCard);

    function flipCard() {

        // if side 1 is showing, change to side 2
        if (num2 === 0) {
            num2 = 1;
            flashcardText.innerHTML = flashcardArr[num1][num2];
        }
        else if (num2 === 1) {
            num2 = 0;
            flashcardText.innerHTML = flashcardArr[num1][num2];
        }


        // if the game hasn't started, don't do anything

        // if shows side 1, flip to side 2
        //card
        console.log("hey")


        // if shows side 2, flip to side 1

        // reset to side 1 when clicking on btnGroupDifficulty

    }


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
