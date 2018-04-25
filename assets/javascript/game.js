var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winNum = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var LetterInput = null;

var letterPick = letters[Math.floor(Math.random() * letters.length)];
console.log(letterPick);

document.onkeyup = function(event) {
var LetterInput = String.fromCharCode(event.keyCode).toLowerCase();
if (guessesMade.indexOf(LetterInput) < 0 && letters.indexOf(LetterInput) >= 0) {
    guessesMade[guessesMade.length]=LetterInput;
    guessesLeft--;
}
if (letterPick == LetterInput) {
    winNum++;
    console.log("You won!");
    guessesLeft = 10;
    guessesMade = [];
    letterPick = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterPick);
}
if (guessesLeft == 0) {
    losses++;
    console.log("You lost!");
    guessesLeft = 10;
    guessesMade = [];
    letterPick = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterPick);
}
var html = "<p><h1>The Psychic Game</h1></p>"+"<p><h2>Guess what letter I'm thinking of</h2></p>"+"<p><h4>Wins: "+winNum+"</h4></p>"+"<p><h4>Losses: "+losses+"</h4></p>"+ "<p><h4>Guesses Remaining: "+guessesLeft+"</h4></p>"+"<p><h4>Your Guesses Made: "+guessesMade+"</h4></p>";
document.querySelector("#gameBody").innerHTML = html;

}
