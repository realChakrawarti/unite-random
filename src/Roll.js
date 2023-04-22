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

class Roll {
  constructor() {
    this.id = Date.now();
  }
}
