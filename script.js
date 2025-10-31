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