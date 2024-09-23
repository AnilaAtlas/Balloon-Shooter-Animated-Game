document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('game-area');
    const scoreDisplay = document.getElementById('score');
    const startButton = document.getElementById('start-button');
    let score = 0;
    let gameInterval;

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.width = `${Math.random() * 50 + 30}px`;
        balloon.style.height = balloon.style.width;
        balloon.style.left = `${Math.random() * (gameArea.clientWidth - 60)}px`;
        balloon.style.animation = `moveUp ${Math.random() * 3 + 3}s linear`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.addEventListener('click', () => {
            score += 10;
            scoreDisplay.innerText = score;
            balloon.remove();
        });
        gameArea.appendChild(balloon);
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    function startGame() {
        score = 0;
        scoreDisplay.innerText = score;
        gameArea.innerHTML = '';
        clearInterval(gameInterval);
        gameInterval = setInterval(createBalloon, 1000);
        startButton.disabled = true;
        
        setTimeout(() => {
            clearInterval(gameInterval);
            alert(`Game Over! Your score is: ${score}`);
            startButton.disabled = false;
        }, 30000);
    }
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    startButton.addEventListener('click', startGame);
});

const timerElement = document.getElementById('timer');
let timeLeft = 30;
const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert('Time is up!'); 
    }
}, 1000);
