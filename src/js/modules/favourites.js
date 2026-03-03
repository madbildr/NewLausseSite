/**
 * Favourites module — heart tracks, persist in localStorage, filter view.
 */
const STORAGE_KEY = 'lausseHubFavourites';

function getFavourites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function saveFavourites(favs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function isFavourite(index) {
  return getFavourites().includes(Number(index));
}

export function toggleFavourite(index) {
  const idx = Number(index);
  const favs = getFavourites();
  const pos = favs.indexOf(idx);
  if (pos === -1) {
    favs.push(idx);
  } else {
    favs.splice(pos, 1);
  }
  saveFavourites(favs);
  return pos === -1; // returns true if now favourited
}

export function getFavouriteIndices() {
  return getFavourites();
}
