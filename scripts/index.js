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
const textInfo = document.getElementById("text-info");

var easyCount = 0;
var hardCount = 0;
var incorrectCount = 0;

var arrayNum1 = 0;
var arrayNum2 = 0;


function startGame() {
    arrayNum1 = 0;
    arrayNum2 = 0;
    easyCount = 0;
    hardCount = 0;
    incorrectCount = 0;
    btnGroupStart.style.display = "none";
    flashcardText.style.fontSize = "xx-large";
    btnGroupDifficulty.style.display = "block";
    textInfo.innerHTML = 'Click on the card to turn it over';

    // Load first item from array
    flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
}

// clicking on flashcard shows other side
flashcard.addEventListener("click", flipCard);

function flipCard() {
    if ((arrayNum1 + 1) !== flashcardArr.length) {
        // if side 1 is showing, change to side 2
        if (arrayNum2 === 0) {
            arrayNum2 = 1;
            flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
            console.log(`flashcardArr[${arrayNum1}][${arrayNum2}]`);
        }
        // vice versa
        else {
            arrayNum2 = 0;
            flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
            console.log(`flashcardArr[${arrayNum1}][${arrayNum2}]`);
        }
    }
    else { }
}

function nextCard() {
    // pull next card only if arrayNum1 is less than the length of the Array
    if ((arrayNum1 + 1) !== flashcardArr.length) {
        arrayNum1 += 1;
        arrayNum2 = 0;
        flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
    }
    // otherwise finish, show results, remove buttons-difficulty
    else {
        flashcardText.style.fontSize = "medium";
        flashcardText.innerHTML =
            "You have finished for today." + "<br>" +
            "Easy cards: " + easyCount + "<br>" +
            "Hard cards: " + hardCount + "<br>" +
            "Incorrect cards: " + incorrectCount;

        btnGroupStart.style.display = "block";
        btnGroupDifficulty.style.display = "none";
        btnStart.innerHTML = 'Study again';
    }
}

function btn(difficulty) {
    if (difficulty === 'easy') {
        easyCount += 1;
    }

    else if (difficulty === 'hard') {
        hardCount += 1;
    }

    // incorrect
    else {
        incorrectCount += 1;
    }
    nextCard();
}
