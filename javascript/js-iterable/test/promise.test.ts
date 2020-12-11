import { promiseIterator } from "../src/promise";

test("resolve with promise all", async () => {
  const result = await Promise.all(promiseIterator);

  expect(result).toEqual([1, 2, 3]);
});
