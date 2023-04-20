"use-strict";

import { randomize } from "./utils.js";
import { PATHS, HELD_ITEMS, BATTLE_ITEMS, POKEMONS } from "./constants.js";

// Elements

const rollBtn = document.getElementById("roll");
const pathText = document.getElementById("path");
const heldItemsElement = document.getElementById("held-items");
const battleItemElement = document.getElementById("battle-item");
const battleItemImgElement = document.getElementById("battle-item-img");
const pokemonElement = document.getElementById("pokemon");
const pokemonImgElement = document.getElementById("pokemon-img");

// Event Listerners

const getPath = () => {
  const path = randomize(PATHS);
  pathText.innerText = path;
};

const getHeldItems = () => {
  /**
   * @type {string[]}
   */
  let heldItems = [];
  for (let i = 0; i < 3; ) {
    console.log("runs");
    const item = randomize(HELD_ITEMS);
    if (!heldItems.includes(item)) {
      heldItems.push(item);
      i++;
    }
  }
  heldItemsElement.innerText = heldItems.join(" | ");
};

const getBattleItem = () => {
  const battleItem = randomize(BATTLE_ITEMS);
  battleItemImgElement.setAttribute(
    "src",
    `../assets/battle-item/${battleItem}.png`
  );
  battleItemImgElement.setAttribute("alt", battleItem);
  battleItemElement.innerText = battleItem;
};

const getPokemon = () => {
  const pokemon = randomize(POKEMONS);
  pokemonImgElement.setAttribute("src", `../assets/pokemon/${pokemon}.png`);
  pokemonImgElement.setAttribute("alt", pokemon);
  pokemonElement.innerText = pokemon;
};

const roll = () => {
  getPath();
  getHeldItems();
  getBattleItem();
  getPokemon();
};

rollBtn.addEventListener("click", roll);
