"use strict";function renderMonsterCard(e){return'\n    <div class="row">\n      <h2 class="monster-name">'+e.name+'</h2>\n      <div class="row--top__icon">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <path class="sclera" data-name="layer2" d="M32 14.5C14.8 14.5 2.5 32 2.5 32S14.8 49.5 32 49.5 61.5 32 61.5 32 49.2 14.5 32 14.5z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>\n          <circle class="iris" data-name="layer1" cx="32" cy="31.5" r="10" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></circle>\n          <path data-name="layer1" d="M28.5 29.5a4 4 0 0 0 3.5 6" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>\n        </svg>\n      </div>\n    </div>\n    <div class="row">\n      <div class="row--bottom__cr">\n        <svg aria-describedby="desc" aria-labelledby="title" role="img" viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <circle cx="20" cy="36" data-name="layer2" fill="none" r="8" stroke="#202020" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">\n          </circle>\n          <circle cx="44" cy="36" data-name="layer2" fill="none" r="8" stroke="#202020" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">\n          </circle>\n          <path d="M48 58a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-6h-2a8 8 0 0 1-8-8V28A26 26 0 0 1 32 2a26 26 0 0 1 26 26v16a8 8 0 0 1-8 8h-2zM32 45.1V48m0 8v6m-8-6v6m16-6v6" data-name="layer1" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2">\n          </path>\n        </svg>\n        <span class="challenge-rating">'+e.challenge_rating+'</span>\n      </div>\n      <div class="row--bottom__type">\n        <h3 class="monster-type">'+e.type+'</h3>\n      </div>\n      <div class="row--bottom__button">\n        <a href="#" class="card-select">Select</a>\n      </div>\n    </div>\n  '}function renderSpellCard(e){return'\n    <div class="row">\n      <h2 class="spell-name">'+e.name+'</h2>\n      <div class="row--top__icon">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <path class="sclera" data-name="layer2" d="M32 14.5C14.8 14.5 2.5 32 2.5 32S14.8 49.5 32 49.5 61.5 32 61.5 32 49.2 14.5 32 14.5z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>\n          <circle class="iris" data-name="layer1" cx="32" cy="31.5" r="10" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></circle>\n          <path data-name="layer1" d="M28.5 29.5a4 4 0 0 0 3.5 6" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="round"></path>\n        </svg>\n      </div>\n    </div>\n    <div class="row">\n      <div class="row--bottom__cr">\n        <span class="spell-level">'+e.level+'</span>\n      </div>\n      <div class="row--bottom__type">\n        <h3 class="spell-school">'+e.school+'</h3>\n      </div>\n      <div class="row--bottom__button">\n        <a href="#" class="card-select">Select</a>\n      </div>\n    </div>\n  '}function buildMonsterGrid(e){var t=document.querySelector(".card-grid");clearGrid(),e.forEach(function(e,r){var n=renderMonsterCard(e),i=document.createElement("div");i.innerHTML=n,i.classList.add("card"),t.appendChild(i)})}function buildSpellGrid(e){var t=document.querySelector(".card-grid");clearGrid(),e.forEach(function(e,r){var n=renderSpellCard(e),i=document.createElement("div");i.innerHTML=n,i.classList.add("card"),t.appendChild(i)})}function initGrid(){"Monsters"==document.querySelector("header nav ul li.active a").innerHTML?buildMonsterGrid(monsters):buildSpellGrid(spells),initCardSelect()}function initCardSelect(){var e=document.querySelectorAll(".card");Array.prototype.forEach.call(e,function(e){e.addEventListener("click",function(){var e=document.querySelector(".card.active");e&&e.classList.remove("active"),this.classList.add("active"),document.body.classList.add("card-active")})})}function clearGrid(){document.querySelector(".card-grid").innerHTML=""}function initNav(){var e=document.querySelectorAll("header nav ul li");Array.prototype.forEach.call(e,function(e){e.addEventListener("click",function(){document.querySelector(".active").classList.remove("active"),this.classList.add("active"),initGrid()})})}function ready(){initNav(),initGrid();document.querySelector(".card-details__close").addEventListener("click",function(e){document.body.classList.remove("card-active")})}"loading"!==document.readyState?ready():document.addEventListener("DOMContentLoaded",ready);