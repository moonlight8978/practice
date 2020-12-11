import { simpleIterator } from "../src/simple";

const createIterable = () => simpleIterator;

test("implements iterable interface", () => {
  const iterable = createIterable();

  expect(iterable.next()).toEqual({ value: 1, done: false });
  expect(iterable.next()).toEqual({ value: 2, done: false });
  expect(iterable.next()).toEqual({ value: 3, done: false });
  expect(iterable.next()).toEqual({ value: undefined, done: true });
});

test("loop with for of", () => {
  const iterable = createIterable();

  let i = -1;

  for (const value of iterable) {
    i += 1;

    switch (i) {
      case 0:
        expect(value).toEqual(1);
        break;

      case 1:
        expect(value).toEqual(2);
        break;

      case 2:
        expect(value).toEqual(3);
        break;

      default:
        throw new Error("out of range");
    }
  }
});

test("spread operator", () => {
  const iterable = createIterable();

  expect([...iterable]).toEqual([1, 2, 3]);
});

test("function call", () => {
  const iterable = createIterable();
  const fn = jest.fn();

  fn(...iterable);

  expect(fn).toBeCalledWith(1, 2, 3);
});
