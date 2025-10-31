//When the start button has been clicked ("Begin Transmission..."), we show the text and hide this button
document.getElementById("start-button").addEventListener("click", function () {
    //Removes start button from screen
    const button = this;
    setTimeout(() => button.style.display = "none", 500);
    button.style.opacity = "0";

    //Where will the commands appear
    const textElement = document.getElementById("text");
    document.getElementById("blinking-cursor").style.opacity = "1";

    const messages = [
        "Welcome, hacker...",
        "You did it. You've broken into the system and you've entered the 'Break The Code Challenge'.",
        "You thought that was all? Oh, you're so wrong... The game is just beginning...",
        "Get ready to solve the impossible and to prove that you're the best hacker out there..."
    ];
    const typingSpeed = 100;
    const pauseBetweenParts = 1200;

    var currPart = 0;
    var i = 0;

    function typeEffect()
    {
        const currMessage = messages[currPart];
        if (i < currMessage.length)
        {
            textElement.textContent += currMessage.charAt(i);
            i++;
            setTimeout(typeEffect, typingSpeed);
        }
        else
        {
            currPart++;
            if(currPart < messages.length)
            {
                setTimeout(() => {
                    textElement.textContent += "\n\n";
                    i = 0;
                    typeEffect();
                }, pauseBetweenParts);
            }
            else
            {
                document.getElementById("continue-button").style.opacity = "1";
            }
        }
    }
    typeEffect();
});