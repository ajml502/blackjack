/** @format */
import _ from "underscore";

/**
 * esta funcion crea un deck de cartas
 * @param {Array<String>} tiposDeCarta ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tipoEspeciales ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tipoEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta === 0)
    throw new Error("TiposDeCarta es obligatorio como un arreglo de strings");
  if (!tipoEspeciales || tipoEspeciales === 0)
    throw new Error("TiposDeCarta es obligatorio como un arreglo de strings");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tipoEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};

// export default crearDeck;
