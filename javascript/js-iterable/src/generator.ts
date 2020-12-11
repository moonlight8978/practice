export const simpleIteratorWithGenerator = {
  [Symbol.iterator]: function* (i = 1) {
    if (i === 3) {
      yield i;
      return;
    }

    yield i;
    yield* this[Symbol.iterator](i + 1);
  },
};
