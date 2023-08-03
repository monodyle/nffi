const nth_prime = require("./lib");

test("nth_prime", () => {
  expect(nth_prime(1)).toStrictEqual(2);
});
