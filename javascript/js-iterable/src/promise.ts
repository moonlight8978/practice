function* promiseGenerator(i = 1) {
  if (i === 3) {
    return yield Promise.resolve(i);
  }

  yield Promise.resolve(i);
  yield* promiseGenerator(i + 1);
}

export const promiseIterator = {
  [Symbol.iterator]: promiseGenerator,
};
