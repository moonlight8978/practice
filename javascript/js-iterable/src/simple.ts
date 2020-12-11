export const simpleIterator = {
  i: 0,
  values: [1, 2, 3],
  next: function () {
    const result = {
      done: this.i >= this.values.length,
      value: this.values[this.i],
    };
    this.i += 1;
    return result;
  },
  [Symbol.iterator]: function () {
    this.i = 0;
    return this;
  },
};
