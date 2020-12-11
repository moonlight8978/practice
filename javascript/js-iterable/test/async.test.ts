import { asyncIterator } from "./../src/async";

test("handle asynchronous", async () => {
  let i = 0;

  for await (const result of asyncIterator) {
    i += 1;

    switch (i) {
      case 1:
        expect(result).toEqual(1);
        break;

      case 2:
        expect(result).toEqual(2);
        break;

      default:
        throw "Out of range";
        break;
    }
  }
});
