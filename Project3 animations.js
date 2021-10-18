const newGame = document.querySelector(".newbtn");
const rollbtn = document.querySelector(".rollbtn");
const hold = document.querySelector(".holdbtn");
const p0Score = document.getElementById("p0total");
const p1Score = document.getElementById("p1total");
const p0roll = document.getElementById("p0roll");
const p1roll = document.getElementById("p1roll");
const dice = document.querySelector(".diceimg");
const player0 = document.getElementById("player0");
const player1 = document.getElementById("player1");
let score, activePlayer, playing, scores;
let init = function () {
  score = 0;
  scores = [0, 0];
  activePlayer = 0;
  p0roll.textContent = score;
  p1roll.textContent = score;
  p0total.textContent = 0;
  p1total.textContent = 0;
  playing = true;
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  player0.classList.add("playerActive");
  player1.classList.remove("playerActive");
};
init();
const switchPlayer = function () {
  document.getElementById(`p${activePlayer}roll`).textContent = 0;
  score = 0;
  player0.classList.toggle("playerActive");
  player1.classList.toggle("playerActive");
  activePlayer = activePlayer === 0 ? 1 : 0;
};

rollbtn.addEventListener("click", function () {
  if (playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${roll}.png`;
    if (roll !== 1) {
      dice.classList.remove("hidden");
      score += roll;
      document.getElementById(`p${activePlayer}roll`).textContent = score;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += score;
    document.getElementById(`p${activePlayer}total`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      dice.classList.add("hidden");
      document.getElementById(`player${activePlayer}`).classList.add("winner");
      document
        .getElementById(`player${activePlayer}`)
        .classList.remove("playerActive");
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener("click", init);
