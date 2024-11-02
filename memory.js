function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active'); 
    });
    document.getElementById(sectionId).classList.add('active'); 
}

function startGame() {
    showSection('game');
    initializeGame();
    
}

const images = [
    'img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg','img-14.jpg','img-13.jpg','img-11.jpg','img-12.jpg',
    'img-5.jpg', 'img-6.jpg', 'img-7.jpg', 'img-8.jpg', 'img-9.jpg', 'img-10.jpg',
];

function initializeGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; 
    const cards = [...images, ...images];
    cards.sort(() => Math.random() - 0.5);

    cards.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;

        const img = document.createElement('img');
        img.src = image;
        img.style.display = 'none';
        card.appendChild(img);
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });

    const maxTime = 30; 
    let timeRemaining = maxTime;
    let score = 0;
    let gameFinished = false;

    const timeRemainingDisplay = document.getElementById("timeRemaining");
    const scoreDisplay = document.getElementById("score");
    const finishButton = document.getElementById("finishbutton");

    const timer = setInterval(() => {
        if (!gameFinished) {
             timeRemaining--;
             timeRemainingDisplay.textContent = timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(timer);
                finishButton.disabled = true;  
                gameBoard.innerHTML=`<img src= slow.jpg height=381px>`+
                `<button id="tryAgainButton" height = 24px onclick="resetGame()">Try Again</button>`;                                      
            }
        }
    }, 1000);  

    function finishGame() {
             if (!gameFinished) {
                gameFinished = true; 
                clearInterval(timer);
                finishButton.disabled = true; 
                score = timeRemaining * 10;
                scoreDisplay.textContent = score;
                finishButton.innerHTML= `<div class="alert alert-primary">You finished the game! Your final score is: ${score}</div>`;
                                               
        }
    }
}
// function updateCountdown(){
//     const min = math.floor(time / 60);
//     let sec = time % 60;
//     sec = sec < 2 ? '0' + sec : sec
//     countdown.innerHTML = `${sec}`;
//     time--;
// }

let firstCard, secondCard;
function flipCard(card) {
    if (card.classList.contains('flipped') || secondCard) return;

    card.classList.add('flipped');
    card.querySelector('img').style.display = 'block';

    if (!firstCard) {
        firstCard = card;
    } 
    else {
        secondCard = card;
        checkForMatch();
    }
}

function checkForMatch() {
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;

    if (isMatch) {
        resetCards();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            firstCard.querySelector('img').style.display = 'none';
            secondCard.classList.remove('flipped');
            secondCard.querySelector('img').style.display = 'none';
            resetCards();
        }, 1000);
    }
}

const tryAgainButton = document.getElementById('tryAgainButton');
function initGame() {
    tryAgainButton.style.display = 'none';
}
function resetGame() {
    startGame();
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}
