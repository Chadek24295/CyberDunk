document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timer');
    let timer = 0;
    let interval;

    startButton.addEventListener('click', () => {
        clearInterval(interval); // Reset timer on subsequent clicks
        timer = 0;
        interval = setInterval(() => {
            timer++;
            timerDisplay.textContent = timer;
            animateButton();

            if (timer === 10) {//Explose a partir de 10 seconde
                explodeButton();
                clearInterval(interval);
            }
        }, 1000);
    });

    function animateButton() {
        startButton.classList.add('animate');
        setTimeout(() => startButton.classList.remove('animate'), 500);
    }

    function explodeButton() {
        startButton.classList.add('explode');
        setTimeout(() => startButton.classList.remove('explode'), 5000);
    }
});
