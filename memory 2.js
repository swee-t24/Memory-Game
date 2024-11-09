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

    // function finishGame() {
    //          if (!gameFinished) {
    //             gameFinished = true; 
    //             clearInterval(timer);
    //             finishButton.disabled = true; 
                // score = timeRemaining * 10;
                // scoreDisplay.textContent = score;
//                 finishButton.innerHTML= `<div class="alert alert-primary">You finished the game! Your final score is: ${score}</div>`;
                                               
//         }
//     }
//  }

// let firstCard, secondCard;
// function flipCard(card) {
//     if (card.classList.contains('flipped') || secondCard) return;

//     card.classList.add('flipped');
//     card.querySelector('img').style.display = 'block';

//     if (!firstCard) {
//         firstCard = card;
//     } 
//     else {
//         secondCard = card;
//         checkForMatch();
//     }
// }

// function checkForMatch() {
//     const isMatch = firstCard.image === secondCard.image;

//     if (isMatch) {
//         resetCards();
//     } else {
//         setTimeout(() => {
//             firstCard.remove('flipped');
//             firstCard.querySelector('img').style.display = 'none';
//             secondCard.classList.remove('flipped');
//             secondCard.querySelector('img').style.display = 'none';
//             resetCards();
//         }, 1000);
//     }

//         const [cardOne, cardTwo] = flippedCards;
        
//         if (cardOne.getAttribute('image') === cardTwo.getAttribute('image')) {
//           cardOne.classList.add('matched');
//           cardTwo.classList.add('matched');

//           consecutiveMatches++;
//           score += 10 * consecutiveMatches;
//         }
//         else() => {
//           consecutiveMatches = 0; 
//           cardOne.classList.remove('flipped');
//           cardTwo.classList.remove('flipped');
//           cardOne.textContent = '';
//           cardTwo.textContent = '';
//   }

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
// function checkForMatch() {
//     if (firstCard.image.value === secondCard.image.value) {
//         score += 10;
//         scoreDisplay.textContent = score;
//         flippedCards += 2;
//         if (flippedCards === shuffledCards.length) {
//             endGame();
//         }
//     } else {
//         setTimeout(() => {
//             firstCard.classList.remove('flipped');
//             firstCard.textContent = '';
//             secondCard.classList.remove('flipped');
//             secondCard.textContent = '';
//         }, 1000);
//     }

//     firstCard = null;
//     secondCard = null;
// }

// function startTimer() {
//     timerInterval = setInterval(() => {
//         timeLeft--;
//         timeLeftDisplay.textContent = timeLeft;

//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             endGame();
//         }
//     }, 1000);
// }

// function endGame() {
//     clearInterval(timerInterval);
//      gameBoard.innerHTML=`<img src= slow.jpg height=381px>`+
//                 `<button id="tryAgainButton" height = 24px onclick="resetGame()">Try Again</button>`
//     finalScore.textContent = score;
//     fetchQuote();
//     endMessage.image.remove('hidden');
// }

// async function fetchQuote() {
//     try {
//         const response = await fetch('https://api.quotable.io/random');
//         const data = await response.json();
//         quoteDisplay.textContent = `"${data.content}" — ${data.author}`;
//     } catch (error) {
//         quoteDisplay.textContent = '“Time is up!”';
//     }
// }

// function startGame() {
//     createCards();
//     startTimer();
// }

// startGame();

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
        
}
