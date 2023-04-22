"use-strict";

import { randomize, setAttributes } from "./utils.js";
import { PATHS, HELD_ITEMS, BATTLE_ITEMS, POKEMONS } from "./constants.js";

const imageAssetsPath = "../assets/images";

// Elements

const rollBtn = document.getElementById("roll");
const pathText = document.getElementById("path");
const pathImg = document.getElementById("path-img");
const heldItemsElement = document.getElementById("held-items");
const heldItemsImgElement = document.getElementById("held-items-img");
const battleItemElement = document.getElementById("battle-item");
const battleItemImgElement = document.getElementById("battle-item-img");
const pokemonElement = document.getElementById("pokemon");
const pokemonImgElement = document.getElementById("pokemon-img");

const pokemonTypeForm = document.getElementById("pokemon-type-form");

/**
 * @typedef {Object} RollData
 * @property {Date} id - When the roll was created
 * @property {string} type - Selected type of pokemon
 * @property {string} path - Selected path, either Top, Middle or Bottom
 * @property {string[]} heldItems - Array of held items (3 items)
 * @property {string} battleItem - Selected item which will be taken into battle
 * @property {string} pokemon - Selected Pokemon
 */

/**
 * @type {RollData}
 */
let rollData = {
  id: undefined,
  type: "",
  path: "",
  heldItems: [],
  battleItem: "",
  pokemon: "",
};

/**
 * @type {RollData[]}
 */
const rollDataArr = [];

const setRollData = (data) => {
  rollData = { ...rollData, ...data };
};

// Event Listerner

const getPath = () => {
  const path = randomize(PATHS);
  setRollData({ path: path });
};

const getHeldItems = () => {
  /**
   * @type {string[]}
   */
  let heldItems = [];
  for (let i = 0; i < 3; ) {
    const item = randomize(HELD_ITEMS);
    if (!heldItems.includes(item)) {
      heldItems.push(item);
      i++;
    }
  }

  setRollData({ heldItems: heldItems });
};

const getBattleItem = () => {
  const battleItem = randomize(BATTLE_ITEMS);
  setRollData({ battleItem: battleItem });
};

const getPokemon = () => {
  const pokemon = randomize(POKEMONS);
  setRollData({ pokemon: pokemon });
};

const updateDOM = ({ path, heldItems, battleItem, pokemon }) => {
  // Path
  pathText.innerText = path;
  const pathAttributes = {
    src: `${imageAssetsPath}/path/${path}.png`,
    alt: path,
  };
  setAttributes(pathImg, pathAttributes);

  // Held Item
  heldItemsElement.innerText = heldItems.join(" | ");
  heldItemsImgElement.replaceChildren();
  heldItems.map((item) => {
    const heldItemsAttributes = {
      height: "64px",
      width: "64px",
      src: `${imageAssetsPath}/held-items/${item}.png`,
      alt: item,
    };
    const imgElement = document.createElement("img");
    setAttributes(imgElement, heldItemsAttributes);
    heldItemsImgElement.appendChild(imgElement);
  });

  // Battle Item
  const battleItemAttributes = {
    src: `${imageAssetsPath}/battle-item/${battleItem}.png`,
    alt: battleItem,
  };
  setAttributes(battleItemImgElement, battleItemAttributes);
  battleItemElement.innerText = battleItem;

  // Pokemon
  const pokemonAttributes = {
    src: `${imageAssetsPath}/pokemon/${pokemon}.png`,
    alt: pokemon,
  };
  setAttributes(pokemonImgElement, pokemonAttributes);
  pokemonElement.innerText = pokemon;
};

const initiateRoll = () => {
  setRollData({ id: Date.now() });
  getPath();
  getHeldItems();
  getBattleItem();
  getPokemon();
};

const updateRollDataArr = () => {
  rollDataArr.push(rollData);
  localStorage.setItem("history", JSON.stringify(rollDataArr));
};

const roll = () => {
  initiateRoll();
  updateRollDataArr();
  console.log("Roll-data", rollData);
  updateDOM(rollData);
};

rollBtn.addEventListener("click", roll);
pokemonTypeForm.addEventListener("change", (e) => {
  console.log("Form Event:", e);
});
