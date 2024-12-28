/** @format */

/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de la carta
 */

export const crearCartaHtml = (carta) => {
  if (!carta) throw new Error("carta es obligatorio");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");

  return imgCarta;
};
