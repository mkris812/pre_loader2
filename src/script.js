document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');
    const missDisplay = document.getElementById('miss');
    let score = 0;
    let missCount = 0;
    let gameTimer = null;
    const GAME_DURATION = 120000; // 2 minutes in milliseconds
    const MAX_MISS_COUNT = 10;

    function createTarget() {
        // Only create a new target if miss count is less than max miss count
        if (missCount < MAX_MISS_COUNT) {
            const target = document.createElement('div');
            target.classList.add('target');
            const randomLeft = Math.random() * (gameContainer.clientWidth - 50);
            target.style.left = `${randomLeft}px`;
            target.style.top = `0px`; // Set the initial top position to 0px

            // Randomize animation duration for a more natural feel
            const animationDurationY = Math.random() * 3 + 1.5;
            target.style.animation = `birdMoveY ${animationDurationY}s ease-in-out infinite`; // Apply the falling animation

            target.addEventListener('animationiteration', () => {
                target.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`; // Randomize horizontal position on each iteration
            });

           

            target.addEventListener('click', () => {
                score++;
                updateScore();
                gameContainer.removeChild(target);
                createTarget(); // Create a new target after the current one is clicked
            });

            gameContainer.appendChild(target);
        }
    }

    function updateScore() {
        scoreDisplay.innerText = `Score: ${score}`;
    }

    function updateMiss() {
        missDisplay.innerText = `Miss: ${missCount}`;
    }

    function checkGameEnd() {
        if (missCount >= MAX_MISS_COUNT || Date.now() >= gameStartTime + GAME_DURATION) {
            clearInterval(gameTimer);
            if (missCount >= MAX_MISS_COUNT) {
                alert("Game Over! You missed too many times.");
            } else {
                alert("Time's up! Game Over!");
            }
        }
    }

    // Trigger shooting action on keyboard press
    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') { // Space key
            shootObject();
        }
    });

    function shootObject() {
        // Implement shooting logic here if needed
    }

    let gameStartTime = Date.now();
    gameTimer = setInterval(() => {
        checkGameEnd();
    }, 1000);

    createTarget(); // Start the game by creating the initial target
    updateScore(); // Update initial score display
    updateMiss(); // Update initial miss display
});
