const startingTimer = 15;
var timeSeconds = startingTimer * 60;

window.addEventListener("load", function() {
  startTimer(timeSeconds, "countdown-timer");
});

function startTimer(durationInSeconds, displayElementId) {
  var timeRemaining = durationInSeconds;
  const display = document.getElementById(displayElementId);
  function updateTimer()
  {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeRemaining <= 0)
    {
        clearInterval(timerInterval);
        display.textContent = "YOU LOST!";
    }
    timeRemaining--;
  }
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

const caesarCipher = document.getElementById("caesar-cipher");
const pseudoCode = document.getElementById("pseudo-code");
const pascalTriangle = document.getElementById("pascal-triangle");
const morseCode = document.getElementById("morse-code");
const decimalToBinary = document.getElementById("decimal-to-binary");

const consoleDisplay = document.getElementById("console-text");

caesarCipher.addEventListener("click", function () {
    consoleDisplay.innerHTML = "~~~ The Caesar's Cipher ~~~<br><br>The Caesar's Cipher is a simple encryption technique where each letter in a message is shifted a fixed number of places down the alphabet to create a coded message.<br><br>It's an early form of cryptography named after Julius Caesar, who used it for his private correspondence.<br><br>To decrypt, you reverse the shift by moving the letters back up the alphabet.<br><br>For example, with a shift of 3, 'A' becomes 'D', and to decrypt 'D', you shift it back to 'A'.<br><br>Now knowing this, encrypt the message: RKYVER YRTBTCLS RNRIU.<br>Remember the key (shift), you'll need it for the code.";
})

pseudoCode.addEventListener("click", function () {
    consoleDisplay.innerHTML = "~~~ Understanding Pseudo Code ~~~<br><br>Pseudocode is a plain-language, description of an algorithm's steps that uses a mix of natural and programming language conventions to outline logic.<br><br>It is used as a planning tool for writing actual code and its primary purpose is to be human-readable, allowing programmers to easily communicate, plan, and design the structure of a program before writing it in a specific programming language.<br><br>Solve this pseudo code. Remember the answer:<br>numbers = [12, 15, 7, 10]<br>total = 100<br>FOR each n in numbers<br>\tIF n MOD 2 = 0<br>\t\ttotal = total + n * 5<br>\tELSE<br>\t\ttotal = total + n * 7<br>NEXT<br>PRINT total";
})

pascalTriangle.addEventListener("click", function () {
    consoleDisplay.innerHTML = "~~~ Pascal's Triangle ~~~<br><br>Pascal's triangle is a triangular array of numbers where each number is the sum of the two directly above it, starting with a single 1 at the top.<br><br>It is used in algebra for binomial expansions and in probability to find combinations.<br><br>Here are how the first few rows of Pascal's Triangle look like:<br>1: \t1<br>2:    1 1<br>3:   1 2 1<br>4: 1 3 3 1<br><br>What is the number in the middle of the 9th row?";
})