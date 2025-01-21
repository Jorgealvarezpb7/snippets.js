// Function to determine wether a number is Even or Odd.
// Refer: https://www.geeksforgeeks.org/check-whether-given-number-even-odd/

import { test, expect } from 'bun:test';

function isEven(n: number): boolean {
  return (n % 2 == 0);
}

test('checks 2 is even', () => {
  expect(isEven(2)).toBe(true);
});

test('checks 3 is odd', () => {
  expect(isEven(3)).toBe(false);
});

test('checks 4 is even', () => {
  expect(isEven(4)).toBe(true);
});

test('checks 5 is odd', () => {
  expect(isEven(5)).toBe(false);
});
