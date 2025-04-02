/**Determinar si un string recibido por parámetro es palíndromo o no
 * parámetro string viene sin acentos
 *
 * @param string puede ser: anilina; yo soy; 1234321;
 * @return booleano true si es palíndromo, false si no lo es
 */

import { test, expect } from "bun:test";

function palindromo(param: string): boolean {
  const inverted = param
    .toLowerCase()
    .split("")
    .filter((c) => c !== " ")
    .reverse()
    .join("");
  return param.replace(/ /g, "").toLowerCase() === inverted;
}

test("anilina", () => {
  expect(palindromo("anilina")).toBeTrue();
});

test(" yo soy", () => {
  expect(palindromo(" yo soy")).toBeTrue();
});

// testCases = [
//     testIt(palindromo, "anilina", true),
//     testIt(palindromo, "1234321 ", true),
//     testIt(palindromo, "f#54b534", false),
//     testIt(palindromo, "1234521", false),
//     testIt(palindromo, " yo soy", true),
//     testIt(palindromo, "Anilina", true),
//     testIt(palindromo, "f# %%# F", true),
//     testIt(palindromo, generatePalindromoTestCase(), true)
// ];
