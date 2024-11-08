let score = 0;
let consecutiveMatches = 0;
let flippedCards = [];

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

// function checkForMatch(){
//     const [image, image] = flipCard;
//     if (image.getAttribute('') === )
// }
//     consecutiveMatches++
//     score = consecutiveMatches * 10;

    const maxTime = 9; 
    let timeRemaining = maxTime;
    let gameFinished = false;

    const timeRemainingDisplay = document.getElementById("timeRemaining");
    const scoreDisplay = document.getElementById("score");
    const finishButton = document.getElementById("finishbutton");

    const timer = setInterval(() => {
        if (!gameFinished) {
             timeRemaining--;
             timeRemainingDisplay.textContent = timeRemaining;}

            if (timeRemaining <= 0) {
                clearInterval(timer);
                finishButton.disabled = true; 
                endgame(); })
                // gameBoard.innerHTML=`<img src= slow.jpg height=381px>`
//                 `<button id="tryAgainButton" height = 24px onclick="resetGame()">Try Again</button>`+
//                 `async function fetchQuote() {
//     try {
//         const response = await fetch("https://api.quotable.io/random"); 
//         const data = await response.json();
        
//         displayQuote(data.content, data.author);
//         } 
//         function displayQuote(quote, author) {
//           alert("${quote}" - ${author});
//  }

//     function checkGameStatus(playerLost) {
//           if (playerLost) {
//           fetchQuote();
// }
// }

// checkGameStatus(true);                                      
//             }
//         }
//     }, 1000);  

    function finishGame() {
             if (!gameFinished) {
                gameFinished = true; 
                clearInterval(timer);
                finishButton.disabled = true; 
                // score = timeRemaining * 10;
                // scoreDisplay.textContent = score;
                finishButton.innerHTML= `<div class="alert alert-primary">You finished the game! Your final score is: ${score}</div>`;
                                               
        }
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
    const isMatch = firstCard.image === secondCard.image;

    if (isMatch) {
        resetCards();
    } else {
        setTimeout(() => {
            firstCard.remove('flipped');
            firstCard.querySelector('img').style.display = 'none';
            secondCard.classList.remove('flipped');
            secondCard.querySelector('img').style.display = 'none';
            resetCards();
        }, 1000);
    }

        const [cardOne, cardTwo] = flippedCards;
        
        if (cardOne.getAttribute('data-name') === cardTwo.getAttribute('data-name')) {
          cardOne.classList.add('matched');
          cardTwo.classList.add('matched');

          consecutiveMatches++;
          score += 10 * consecutiveMatches;
        }
        else() => {
          consecutiveMatches = 0; 
          cardOne.classList.remove('flipped');
          cardTwo.classList.remove('flipped');
          cardOne.textContent = '';
          cardTwo.textContent = '';
  }

//   flippedCards = [];
//   document.getElementById('score').textContent = score;

// function endGame() {
//   document.querySelector('.grid').style.display = 'none';
//   document.getElementById('final-score').textContent = score;
//   document.getElementById('game-over').style.display = 'block';
  
//   // Fetch quote from API
//   fetch('https://api.quotable.io/random')
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('quote').textContent = data.content;
//     })
//     .catch(() => {
//       document.getElementById('quote').textContent = "Could not load a quote.";
//     });
// }
// }
// initializeGame();


// const tryAgainButton = document.getElementById('tryAgainButton');
// function initGame() {
//     tryAgainButton.style.display = 'none';
// }
// function resetGame() {
//     startGame();
// }

// function resetCards() {
//     firstCard = null;
//     secondCard = null;
// }
function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        // Matched, increase score
        score += 10;
        scoreDisplay.textContent = score;
        flippedCards += 2;
        if (flippedCards === shuffledCards.length) {
            endGame();
        }
    } else {
        // Not a match, flip back after a delay
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.classList.remove('flipped');
            secondCard.textContent = '';
        }, 1000);
    }

    firstCard = null;
    secondCard = null;
}

// Start the countdown timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// End the game
function endGame() {
    clearInterval(timerInterval);
    finalScore.textContent = score;
    fetchQuote();
    endMessage.classList.remove('hidden');
}

// Fetch a random quote from an API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteDisplay.textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
        quoteDisplay.textContent = '“Time is up!”';
    }
}

function startGame() {
    createCards();
    startTimer();
}

startGame();
}
        
    
