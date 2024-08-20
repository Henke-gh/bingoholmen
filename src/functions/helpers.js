import { build } from "vite";
import buildings from "../constants/buildings_array";
import items from "../constants/items_array";

//In this implementation, we start at the end of the array and loop backwards through the array.
//For each element, we generate a random index between 0 and the current index (inclusive),
//and then swap the current element with the randomly selected element.
//Once we've looped through the entire array, we return the shuffled array.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function createBingoTiles() {
  let tilesArray = [];

  let shuffledBuildings = shuffle(buildings);
  let shuffledItems = shuffle(items);

  for (let i = 0; i < 3; i++) {
    tilesArray.push(shuffledBuildings[i]);
  }

  for (let j = 0; j < 6; j++) {
    tilesArray.push(shuffledItems[j]);
  }

  return tilesArray;
}
