import { simpleIteratorWithGenerator } from "../src/generator";

test("spread operator", () => {
  expect([...simpleIteratorWithGenerator]).toEqual([1, 2, 3]);
});

test("function call", () => {
  const iterable = simpleIteratorWithGenerator;
  const fn = jest.fn();

  fn(...iterable);

  expect(fn).toBeCalledWith(1, 2, 3);
});
