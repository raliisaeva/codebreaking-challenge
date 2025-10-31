window.addEventListener("load", function () {
    const textElement = document.getElementById("text");
    document.getElementById("blinking-cursor-instructions").style.opacity = "1";

    const messages = [
        "To win the official title of the 'best hacker', you'll first have to complete some challenges.",
        "You'll have 15 minutes to crack the code. It has 4 digits and you'll have to complete a series of",
        "challenges to find these numbers and the correct combination with them.",
        "But be careful, you have only 3 guesses. If you don't guess the correct code within those",
        "time and guesses limitations, you lose.",
        "Please, don't use any artificial intelligence to solve the problems, this game is just for fun.",
        "For the full experience I recommend going into full screen (F11 on your keyboard).",
        "Are you ready to start?"
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
                document.getElementById("start-challenge").style.opacity = "1";
            }
        }
    }
    typeEffect();
});