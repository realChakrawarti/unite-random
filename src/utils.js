"use-strict";

/**
 * Provided a list of items, returns a item at random.
 * @template T
 * @param {Array<T>} items - List of items
 * @returns {T} A single item from list of items
 * @throws Invalid parameter - An array is not provided.
 * @throws Provide a list with items - No item in the array.
 */
export const randomize = (items) => {
  if (!Array.isArray(items)) throw new Error("Invalid parameter.");
  const length = items.length;
  if (!(length > 0)) throw new Error("Provide a list with items.");
  const randomIndex = Math.floor(Math.random() * length);
  return items[randomIndex];
};
