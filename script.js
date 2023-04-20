const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const dice1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score1.textContent = 0;
score2.textContent = 0;
dice1.classList.add("hidden");
let score = 0;
let activePlayer = 0;
let playing = true;
let scores = [0, 0];

player1.classList.remove("player--winner");
player2.classList.remove("player--winner");
player1.classList.add("player--active");
player2.classList.remove("player--active");

const switchPLayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    dice1.classList.remove("hidden");
    if (dice <= 4) {
      dice1.src = `dice-${dice}.png`;
    } else {
      dice1.src = `dice-${dice}.jpg`;
    }
    if (dice !== 1) {
      score += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = score;
    } else {
      switchPLayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += score;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice1.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPLayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  score1.textContent = 0;
  score2.textContent = 0;
  dice1.classList.add("hidden");
  score = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  current1.textContent = 0;
  current2.textContent = 0;

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
});
