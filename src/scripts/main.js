'use strict';

function renderMonsterCard(monster) {
  const monsterCard = `
    <div class="row">
      <h2 class="monster-name">${monster.name}</h2>
      <div class="row--top__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path class="sclera" data-name="layer2" d="M32 14.5C14.8 14.5 2.5 32 2.5 32S14.8 49.5 32 49.5 61.5 32 61.5 32 49.2 14.5 32 14.5z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>
          <circle class="iris" data-name="layer1" cx="32" cy="31.5" r="10" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></circle>
          <path data-name="layer1" d="M28.5 29.5a4 4 0 0 0 3.5 6" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
    <div class="row">
      <div class="row--bottom__cr">
        <svg aria-describedby="desc" aria-labelledby="title" role="img" viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <circle cx="20" cy="36" data-name="layer2" fill="none" r="8" stroke="#202020" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">
          </circle>
          <circle cx="44" cy="36" data-name="layer2" fill="none" r="8" stroke="#202020" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">
          </circle>
          <path d="M48 58a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-6h-2a8 8 0 0 1-8-8V28A26 26 0 0 1 32 2a26 26 0 0 1 26 26v16a8 8 0 0 1-8 8h-2zM32 45.1V48m0 8v6m-8-6v6m16-6v6" data-name="layer1" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">
          </path>
        </svg>
        <span class="challenge-rating">${monster.challenge_rating}</span>
      </div>
      <div class="row--bottom__type">
        <h3 class="monster-type">${monster.type}</h3>
      </div>
      <div class="row--bottom__button">
        <a href="#" class="card-select">Select</a>
      </div>
    </div>
  `;

  return monsterCard;
}

function renderSpellCard(spell) {
  const spellCard = `
    <div class="row">
      <h2 class="spell-name">${spell.name}</h2>
      <div class="row--top__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path class="sclera" data-name="layer2" d="M32 14.5C14.8 14.5 2.5 32 2.5 32S14.8 49.5 32 49.5 61.5 32 61.5 32 49.2 14.5 32 14.5z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>
          <circle class="iris" data-name="layer1" cx="32" cy="31.5" r="10" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></circle>
          <path data-name="layer1" d="M28.5 29.5a4 4 0 0 0 3.5 6" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>
        </svg>
      </div>
    </div>
    <div class="row">
      <div class="row--bottom__cr">
        <span class="spell-level">${spell.level}</span>
      </div>
      <div class="row--bottom__type">
        <h3 class="spell-school">${spell.school}</h3>
      </div>
      <div class="row--bottom__button">
        <a href="#" class="card-select">Select</a>
      </div>
    </div>
  `;

  return spellCard;
}

function buildMonsterGrid(cards) {
  const cardContainer = document.querySelector('.card-grid');
  clearGrid();
  cards.forEach(function(card, i) {
    const currCard = renderMonsterCard(card);

    const currCardContainer = document.createElement('div');
    currCardContainer.innerHTML = currCard;
    currCardContainer.classList.add('card');
    cardContainer.appendChild(currCardContainer);
  });
}

function buildSpellGrid(cards) {
  const cardContainer = document.querySelector('.card-grid');
  clearGrid();
  cards.forEach(function(card, i) {
    const currCard = renderSpellCard(card);

    const currCardContainer = document.createElement('div');
    currCardContainer.innerHTML = currCard;
    currCardContainer.classList.add('card');
    cardContainer.appendChild(currCardContainer);
  });
}

function initGrid() {
  let navCheck = document.querySelector('header nav ul li.active a').innerHTML;
  if (navCheck == 'Monsters') {
    buildMonsterGrid(monsters);
  }
  else {
    buildSpellGrid(spells);
  }
  initCardSelect();
}

function initCardSelect() {
  const cards = document.querySelectorAll('.card');

  Array.prototype.forEach.call(cards, function(el) {
    el.addEventListener('click', function() {
      const activeCard = document.querySelector('.card.active');
      if (activeCard) {
        activeCard.classList.remove('active');
      }
      this.classList.add('active');
      document.body.classList.add('card-active');
    });
  });
}

function clearGrid() {
  const cardContainer = document.querySelector('.card-grid');
  cardContainer.innerHTML = '';
}

function initNav() {
  const navItems = document.querySelectorAll('header nav ul li');
  
  Array.prototype.forEach.call(navItems, function(el) {
    el.addEventListener('click', function() {
      document.querySelector('.active').classList.remove('active');
      this.classList.add('active');

      // Hmmm...
      initGrid();
    });
  });
}

function ready() {
  initNav();
  initGrid();

  const detailsCloseBtn = document.querySelector('.card-details__close');
  detailsCloseBtn.addEventListener('click', function(el) {
    document.body.classList.remove('card-active');
  });
}

if (document.readyState !== 'loading') {
  ready();
} else {
  document.addEventListener('DOMContentLoaded', ready);
}
