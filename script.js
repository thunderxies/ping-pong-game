const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');



let p1Score = 0; // this will keep the track of the current score
let p2Score = 0;
let winningScore = 5;
let isGameOver = false; //why false: because in the beginning of the game we are still playing its just started




p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score = p1Score + 1;

        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score; //this is linked with the h1.
    }
})


p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score = p2Score + 1;

        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score; //this is linked with the h1.
    }
})


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset(); //this will execute and reset this will not execute but reset() this means it will reset the
})


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    //updating the display
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner", 'loser');
    p2Display.classList.remove("winner", "loser");
    p1Button.disabled = false;
    p2Button.disabled = false;
}

resetButton.addEventListener('click', reset)