# TypeScript Learning

## Motivation

Learn how to think in programming terms using TypeScript to solve logic exercises.

## Getting Started

This project uses [Bun](https://bun.sh) as a runtime, you must install it
in order to run the project.

The module [`bun:test`](https://bun.sh/docs/cli/test) is used to write tests,
to run any TypeScript file you must run:

```bash
bun test ./src/<FILENAME>.ts
```

### Test Driven Development (TDD)

Test Driven Development is a great way to get started with writing code.

1. You must provide test for the expected outputs, consider the following exercise:

```
Write a program that prints the multiplication table of a number N.
```

2. You must write the test first, consider the following test:

```typescript
it('should return the multiplication table of 2', () => {
  const expected = '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n';
  const result = multiplicationTable(2);

  expect(result).toBe(expected);
});
```

3. Write the code that makes the test pass:

```typescript
function multiplicationTable(n: number): string {
  let table = '';

  for (let i = 1; i <= 10; i++) {
    table += `${n} x ${i} = ${n * i}\n`;
  }

  return table;
}
```

4. Run the test:

```bash
bun test ./src/multiplicationTable.ts
```

## Exercise List

The goal of this repository is to use TypeScript to solve logic exercises from the following sources:

1. Geeks4Geeks: https://www.geeksforgeeks.org/logic-building-problems/
2. Universidad Santa Maria: https://progra-utfsm.github.io/material/01_Intro_Programacion.html
