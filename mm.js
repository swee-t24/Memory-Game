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
    'img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg',
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
}

let staringmin = 7;

const massage = document.getElementById("game-board");
const countdown = document.getElementById("countdown");
const timer = setInterval(() => {
    countdown.textContent = `Time Left : ${staringmin} seconds`;
    staringmin--;

    if (staringmin < 0){
        clearInterval(timer);
        massage.innerHTML = `<img src="slow.jpg" height="497px" width="777px">`;
    }
    }, 1000);

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
