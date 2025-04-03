/**Encontrar si todos los caracteres son utilizables para hacer cálculos matemáticos entre ellos
 *
 * @param arrays ejemplo: [[1,"2",3], [4,"3",5]]
 * [[1,2], ["2", 4]] son todos operables, porque podemos operar con "2" ya que al parsearlo es un número válido
 * [[1,"d"], [4,5], [3,2,5,7,3]] no son todos operables, porque "d" no es un número para dividir/multiplicar/sumar/restar
 * [[1,"g2"]] no son todos operables, porque "g2" no nos da un resultado matemático
 * @return booleano true si son todos operables, false si no
 */
import { test, expect } from "bun:test";

function numerosOperables(arrays: any[][]): boolean {
  for (let group of arrays) {
    for (let gm of group) {
      if (isNaN(gm)) {
        return false;
      }
    }
  }
  return true;
}

test("should return true for arrays", () => {
  expect(
    numerosOperables([
      [1, 2],
      ["2", 4],
    ]),
  ).toBeTruthy();
});

test("should return true for arrays", () => {
  expect(
    numerosOperables([
      [1, "2", 3],
      [4, "3", 5],
    ]),
  ).toBeTruthy();
});

test("should return false for arrays", () => {
  expect(
    numerosOperables([
      [1, "d"],
      [4, 5],
      [3, 2, 5, 7, 3],
    ]),
  ).toBeFalsy();
});

test("should return false for arrays", () => {
  expect(numerosOperables([[1, "g2"]])).toBeFalse();
});
