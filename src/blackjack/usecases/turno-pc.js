/** @format */
import { crearCartaHtml } from "/src/blackjack/usecases/crear-carta-html.js";
import { pedirCarta } from "/src/blackjack/usecases/pedir-carta.js";
import { valorCarta } from "/src/blackjack/usecases/valor-carta.js";

/**
 * turno de la computadora
 * @param {devuelve imagen} puntosMinimos
 */

let puntosComputadora = 0;

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck); // Pasar el deck como argumento

    if (!puntosMinimos) throw new Error("puntosMinimos es obligatorio");
    if (!puntosHTML) throw new Error("deck es obligatorio");

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    //creamos carta
    const imgCarta = crearCartaHtml(carta);

    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
