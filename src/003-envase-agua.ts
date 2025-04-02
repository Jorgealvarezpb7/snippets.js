/** Nos imaginamos que tenemos una cantidad ilimitada de envases con capacidad para contener 25 litros de agua
 * que hay que llenar con el agua que nos dan durante un día y tenemos que averiguar cuántos envases usamos en total
 * En un array, recibimos la cantidad de litros (enteros) que nos dan por cada vez que alguien nos entrega agua durante el día
 * Por ejemplo si recibimos [25,8] significa que una vez recibimos 25 litros y la siguiente recibimos 8 litros, en total en el día 33 litros
 * en ese caso hay que usar 2 envases de 25 litros, uno lleno y el otro con 8 litros de agua, en ese caso devolvemos el número 2 (de 2 envases usados)
 *
 * @param arr es un array que contiene números enteros, por ejemplo [25,10,34], [2,49,25,31].... el array puede venir con una cantidad indeterminada de valores siempre numéricos y enteros
 * @return valor numérico que representa el número total de envases usados
 * por ejemplo si recibimos [10,15] (esto es recibir 10+15 litros) devolveremos 1 (envase)
 * si recibimos [20,10] devolveremos 2 (envases)
 */

import { test, expect } from "bun:test";

const BOTTLE_CAPACITY = 25;

function waterBottles(bottles: number[]): number {
  let totalLiters = 0;

  for (let bottle of bottles) {
    totalLiters += bottle;
  }

  return Math.ceil(totalLiters / BOTTLE_CAPACITY);
}

test("should return 2 bottles for 33 liters", () => {
  // Por ejemplo si recibimos [25,8] significa que una vez recibimos 25 litros y la siguiente recibimos 8 litros,
  // en total en el día 33 litros en ese caso hay que usar 2 envases de 25 litros, uno lleno y el otro con 8 litros
  // de agua, en ese caso devolvemos el número 2.

  const have = waterBottles([25, 8]);
  const want = 2;

  expect(have).toBe(want);
});

test("should return 2 bottles for 33 liters", () => {
  // por ejemplo si recibimos [10,15] (esto es recibir 10+15 litros) devolveremos 1 (envase)

  const have = waterBottles([10, 15]);
  const want = 1;

  expect(have).toBe(want);
});

// var testCases = [
//     testIt(calcularEnvasesUsados, [11,454,1,2,3], 19),
//     testIt(calcularEnvasesUsados, [400], 16),
//     testIt(calcularEnvasesUsados, [0,1,2,3,4,2,1,3,4,2,1,2,1], 2),
//     testIt(calcularEnvasesUsados, [23,1], 1)
// ];
// checkTestCases("calcular envases usados", testCases);
