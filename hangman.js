let POSSIBLE_WORDS = ["javascript", "hangman", "programming", "developer", "function", "variable", "object", "array", "string", "boolean"];

let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;
let gameOver = false;
function newGame() {
    guesses="";
    guessCount=MAX_GUESSES;
    gameOver=false;
let ramdomIndex = parseInt(
Math.random() * POSSIBLE_WORDS.length);
 word = POSSIBLE_WORDS[ramdomIndex];
updateScreen ();
}
function guess() {
    let input = document.getElementById("guess");
    let letter = input.value;
    input.value="";
                
    if (word != "" && guesses.indexOf(letter) <0 && letter != "" && guessCount >0 && document.getElementById("clue").textContent.indexOf("_") >=0) {
    if (word.indexOf(letter) <0) {
                guessCount--;
            }
            guesses+=letter;
            updateScreen();
            }
        }
    

function updateScreen() {
    let clueString ="";
for(let i=0; i<word.length; i++){
    let letter = word.charAt(i);
    if (guesses.indexOf(letter) >=0) {
        clueString+=letter+" ";
    }
    else {
        clueString+="_ ";}
}
let clue = document.getElementById("clue");
clue.textContent = clueString;

let guessArea =
 document.getElementById("guesses");
guessArea.textContent= 
"Guessed Letters: " + guesses;

let image = document.getElementById("hangmanpic");
image.src = `i/hangman${guessCount}.gif`;

if (clueString.indexOf("_") <0) {
    guessArea.textContent = "Victory Royale";

}
else if (guessCount <=0) {
    guessArea.textContent = "Game Over The word was " + word;
}
}
    




