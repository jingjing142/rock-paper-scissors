const game = () => {
    let pScore = 0; 
    let cScore = 0; 

    //Start the game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector (".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    };

    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        //Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach (option => {
            option.addEventListener("click", function() {
                console.log(this);
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);

                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore; 
        computerScore.textContent = cScore; 
    }    

    const compareHands = (playerChoice, computerChoice) => {
        
        const winner = document.querySelector(".winner");
        
        playerChoice = playerChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if(playerChoice === computerChoice) {
            winner.textContent = "It is a tie!";
            return;
            
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "You win"
                pScore++;
                updateScore()
                return; 
    
        } else if (computerChoice === "paper") {
                winner.textContent = "You lose"
                cScore++;
                updateScore()
                return;
            }
        
        } else if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "You lose"
                cScore++;
                updateScore()
                return; 
            
        } else if (computerChoice === "rock") {
                winner.textContent = "You win"
                pScore++;
                updateScore()
                return;
            }
        
        } else if(playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "You lose"
                cScore++;
                updateScore()
                return; 
        } else if (computerChoice === "paper") {
                winner.textContent = "You win"
                pScore++;
                updateScore()
                return;
            }
        }
        

    }

    // Call all the inner functions
    startGame();
    playMatch();
}

//Start the game function

game();

