/** arr.length siempre mayor a 1
 * Tenemos que determinar si un array es incremental, es decir si cada número es mayor que el anterior
 * [1,2,3] es incremental
 * [1,2,3,2] no es incremental
 *
 * @param arr ejemplos: [1,2,3], [4,3,2], [1,3,2,4,5,6,5,8,9,10]
 * @return booleano true si el array es incremental, false si no lo es
 */

import { test, expect } from "bun:test";

function isArrayIncremental(arr: number[]): boolean {
  let previousNumber: number | null = null;

  for (let num of arr) {
    if (previousNumber === null) {
      previousNumber = num;
      continue;
    }

    if (previousNumber > num) {
      return false;
    }

    previousNumber = num;
  }
  return true;
}

test("should return true for [1,2,3]", () => {
  expect(isArrayIncremental([1, 2, 3])).toBeTrue();
});

test("should return false for [4,3,2]", () => {
  expect(isArrayIncremental([4, 3, 2])).toBeFalse();
});

test("should return false for [1,3,2,4,5,6,5,8,9,10]", () => {
  expect(isArrayIncremental([1, 3, 2, 4, 5, 6, 5, 8, 9, 10])).toBeFalse();
});
