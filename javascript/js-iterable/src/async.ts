const fetchData = () =>
  new Promise<bigint>((resolve) => setTimeout(() => resolve(1), 200));

const notify = () =>
  new Promise<bigint>((resolve) => setTimeout(() => resolve(2), 200));

export const asyncIterator = {
  async *[Symbol.asyncIterator]() {
    throw new Error("API error");

    yield fetchData();

    yield notify();
  },
};
