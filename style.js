//Output game starting text
window.addEventListener("load", function () {
    const text = "Well, seems like you did it. You broke into the system. Congratulations!\nYou thought that was all? Oh, you're so wrong. The game is just now beginning... \nYou think that you're the best hacker out there? Now's your chance to prove it...";
    const speed = 100;
    let i = 0;
    const textElement = document.getElementById("text");
    function typeEffect() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }
    typeEffect();
});