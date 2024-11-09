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
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
    'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg',
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

const maxTime = 7; 
        let timeRemaining = maxTime;
        let score = 0;
        let gameFinished = false;
        let flippedcard = 0;
 
        function increaseScore(points) {
            score += points;
            document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
        }
        const timeRemainingDisplay = document.getElementById("timeRemaining");
        const scoreDisplay = document.getElementById("score");
        const finishButton = document.getElementById("finishbutton");

        const timer = setInterval(() => {
            if (!gameFinished) {
                timeRemaining--;
                timeRemainingDisplay.textContent = timeRemaining;

                if (timeRemaining <= 0) {
                    clearInterval(timer);
                    
                    gameBoard.innerHTML=`<img src="slow.jpg" height=381px><br>
                    <button id="tryAgainButton" onclick="resetGame()">Try Again</button>`+
                    `<div class="alert alert-primary">Your final score is: ${score}</div>`;                                      
                }
                       
            }
        }, 1000);  
        if (!gameFinished); {
            gameFinished = true; 
            clearInterval(timer);                      
            gameBoard.innerHTML= `<div class="alert alert-primary">You finished the game! Your final score is: ${score}</div>`;
            score = flippedcard * 10;
            scoreDisplay.textContent = score;
                              
        }
    }        
       



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
