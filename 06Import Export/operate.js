const add = (a, b) => {
  return a + b;
};
// Whatever we pass during defining, are called parameters.
// module.exports.add = add;

const sub = (a, b) => {
  return a - b;
};
// module.exports.sub = sub;

module.exports = { add, sub };
