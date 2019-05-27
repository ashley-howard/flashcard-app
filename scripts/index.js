var flashcardArr = localStorage.getItem('flashcards') ? JSON.parse(localStorage.getItem('flashcards')) : [];

var arrEasy = [];
var arrHard = [];
var arrIncorrect = [];

function concatArrays() {
    var arrConcat = arrHard.concat(arrIncorrect);
    return arrConcat;
}

const flashcard = document.getElementById("flashcard");
const flashcardAdd1 = document.getElementById("flashcard-add-1");
const flashcardAdd2 = document.getElementById("flashcard-add-2");
const addInfo = document.getElementById("addInfo");
const settingsInfo = document.getElementById("settingsInfo");
const flashcardText = document.getElementById("flashcard-text");
const btnGroupStart = document.getElementById("buttons-start");
const btnAdd = document.getElementById("btn-add");
const btnFinishAdd = document.getElementById("btn-add-finish");
const btnStart = document.getElementById("btn-start");
const btnGroupDifficulty = document.getElementById("buttons-difficulty");
const btnEasy = document.getElementById("btn-easy");
const btnHard = document.getElementById("btn-hard");
const btnIncorrect = document.getElementById("btn-incorrect");
const textInfo = document.getElementById("text-info");
const btnSettings = document.getElementById("btn-settings");

const screenIntro = document.getElementById("screenIntro");
const screenAdd = document.getElementById("screenAdd");
const screenGame = document.getElementById("screenGame");
const screenSettings = document.getElementById("screenSettings");

var rememberScreen = '';
var easyCount = 0;
var hardCount = 0;
var incorrectCount = 0;

var arrayNum1 = flashcardArr.length + 1; // to prevent 'unwanted' clicks
var arrayNum2 = 0;

if (flashcardArr.length > 0) {
    changeScreen('game');
}
else {
    changeScreen('intro');
}

function addCard() {
    if (flashcardAdd1.value != '' && flashcardAdd2.value != '') {
        flashcardArr.push([flashcardAdd1.value, flashcardAdd2.value])
        localStorage.setItem('flashcards', JSON.stringify(flashcardArr));
        flashcardAdd1.value = '';
        flashcardAdd2.value = '';
        flashcardAdd1.focus();
    }
    else {
        addInfo.innerHTML = "Please write on both sides before clicking add";
        setTimeout(function () {
            addInfo.innerHTML = "";
        }, 2000);
    }

}

screenAdd.onload = flashcardAdd1.focus();

// Enter key front card
flashcardAdd1.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        flashcardAdd2.focus();
    }
});

// Enter key back card
flashcardAdd2.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btnAdd.click();
    }
});

function finishAddCard() {
    if (flashcardArr.length > 0) {
        changeScreen('game');
    }
    else {
        addInfo.innerHTML = "Please add a card before finishing";
        setTimeout(function () {
            addInfo.innerHTML = "";
        }, 2000);
    }
}


function startGame() {
    arrayNum1 = 0;
    arrayNum2 = 0;
    easyCount = 0;
    hardCount = 0;
    incorrectCount = 0;
    btnGroupStart.style.display = "none";
    flashcardText.style.display = "flex";
    flashcardText.style.marginTop = "0";
    flashcardText.style.fontSize = "xx-large";
    textInfo.innerHTML = 'Click on the card to turn it over';

    // Load first item from array
    flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
}

// clicking on flashcard shows other side
flashcard.addEventListener("click", flipCard);

function flipCard() {
    if ((arrayNum1) <= flashcardArr.length) {
        // if side 1 is showing, change to side 2 + and show Buttons
        if (arrayNum2 === 0) {
            arrayNum2 = 1;
            flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
            btnGroupDifficulty.style.display = "block";
            infoMessage('help');
        }
        // vice versa
        else {
            arrayNum2 = 0;
            flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
        }
    }
    else { console.log("Can't flip card") }
}

function nextCard() {
    // pull next card only if arrayNum1 is less than the length of the Array
    if ((arrayNum1 + 1) < flashcardArr.length) {
        arrayNum1 += 1;
        arrayNum2 = 0;
        flashcardText.innerHTML = flashcardArr[arrayNum1][arrayNum2];
        btnGroupDifficulty.style.display = "none";
    }

    // otherwise finish, show results, remove buttons-difficulty
    else {
        arrayNum1 = flashcardArr.length + 1; // this makes the Results screen unclickable
        infoMessage('finish');
        flashcardText.style.display = "block";
        flashcardText.style.marginTop = "50%";
        flashcardText.style.fontSize = "larger";
        flashcardText.innerHTML =
            "<strong>" + "Results" + "</strong><br>" +
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
        infoMessage('easy');
        arrEasy.push(flashcardArr[arrayNum1]);

    }

    else if (difficulty === 'hard') {
        hardCount += 1;
        infoMessage('hard');
        arrHard.push(flashcardArr[arrayNum1]);

    }

    // incorrect
    else {
        incorrectCount += 1;
        infoMessage('incorrect');
        arrIncorrect.push(flashcardArr[arrayNum1]);

    }
    nextCard();
}

function infoMessage(type) {
    var randNo = Math.floor(Math.random() * 4);

    if (type === 'incorrect') {
        textInfo.innerHTML = 'No problem, try this one instead!';
    }

    if (type === 'finish' && flashcardArr + 1) {
        textInfo.innerHTML = "You've finished for today.";
    }

    if (type === 'help' && arrayNum1 === 0) {
        textInfo.innerHTML = 'Now choose easy, hard, or incorrect';
    }

    else if (type === 'help' && arrayNum1 === 1) {
        textInfo.innerHTML = "<br>";
    }

    if (type === 'easy' && randNo === 0) {
        textInfo.innerHTML = 'Great! Now try this one...';
    }

    else if (type === 'easy' && randNo === 1) {
        textInfo.innerHTML = 'Nice job. Keep going!';
    }

    else if (type === 'easy' && randNo === 2) {
        textInfo.innerHTML = 'Doing awesome. Next up...';
    }

    else if (type === 'easy' && randNo === 3) {
        textInfo.innerHTML = 'Great job! Next up...';
    }
    if (type === 'hard') {
        textInfo.innerHTML = 'Doing great. Try this one!';
    }

    /*
    setTimeout(function () {
        textInfo.innerHTML = "<br>";
    }, 2000);
    */
}

function changeScreen(screen) {
    if (screen === 'intro') {
        screenIntro.style.display = 'block';
        screenAdd.style.display = 'none';
        screenGame.style.display = 'none';
        screenSettings.style.display = 'none';
        // btnSettings.setAttribute("onclick", `settings('intro')`);
    }

    else if (screen === 'add') {
        screenIntro.style.display = 'none';
        screenAdd.style.display = 'block';
        screenGame.style.display = 'none';
        screenSettings.style.display = 'none';
        //flashcardAdd1.focus();
    }

    else if (screen === 'game') {
        // btnSettings.setAttribute("onclick", `changeScreen('settings')`);
        screenIntro.style.display = 'none';
        screenAdd.style.display = 'none';
        screenGame.style.display = 'block';
        screenSettings.style.display = 'none';
    }

    else if (screen === 'settings') {
        // btnSettings.setAttribute("onclick", `changeScreen('game')`);
        screenIntro.style.display = 'none';
        screenAdd.style.display = 'none';
        screenGame.style.display = 'none';
        screenSettings.style.display = 'block';
    }
}

function clearData() {
    localStorage.clear();
    settingsInfo.innerHTML = "Please refresh to see changes"
}

function settings() {
    if (screenIntro.style.display === 'block') {
        rememberScreen = 'intro';
        changeScreen('settings');
    }

    else if (screenSettings.style.display === 'block') {
        changeScreen(`${rememberScreen}`);
    }

    else if (screenAdd.style.display === 'block') {
        rememberScreen = 'add';
        changeScreen('settings');
    }

    else if (screenGame.style.display === 'block') {
        rememberScreen = 'game';
        changeScreen('settings');
    }
}