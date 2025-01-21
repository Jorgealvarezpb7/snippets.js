// Print Multiplication Table for Number
// https://www.geeksforgeeks.org/program-to-print-multiplication-table-of-a-number/

import { test, expect } from 'bun:test';

function multiplicationTable(n: number): string {
  let table = '';

  for (let i = 1; i <= 10; i++) {
    table += `${n} x ${i} = ${n * i}\n`;
  }

  return table;
}

test('should return the multiplication table of 2', () => {
  const expected = '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n';
  const result = multiplicationTable(2);

  expect(result).toBe(expected);
});

test('should return the multiplication table of 3', () => {
  const expected = '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n';
  const result = multiplicationTable(3);

  expect(result).toBe(expected);
});

test('should return the multiplication table of 4', () => {
  const expected = '4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n4 x 6 = 24\n4 x 7 = 28\n4 x 8 = 32\n4 x 9 = 36\n4 x 10 = 40\n';
  const result = multiplicationTable(4);

  expect(result).toBe(expected);
});
