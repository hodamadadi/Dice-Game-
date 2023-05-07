'use strict';
const score_0 = document.querySelector('#score--0');
const score_1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

const btn_new = document.querySelector('.btn--new');

const current_0 = document.getElementById('current--0');
const current_1 = document.getElementById('current--1');

const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

let currentScore, activePlayer, isGame, score;
function init() {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  isGame = true;

  score_0.textContent = 0;
  score_1.textContent = 0;
  dice.classList.add('hidden');

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
}
init();
const switchPlayer = function () {
  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

btn_roll.addEventListener('click', function () {
  if (isGame) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove('hidden');
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});
btn_hold.addEventListener('click', function () {
  if (isGame) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] == 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
      isGame = false;
    } else {
      switchPlayer();
    }
  }
});

btn_new.addEventListener('click', init);
