
function * createCounter () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const counter = createCounter();

const first = counter.next().value;
console.log('first value', first);

console.log('for of loop:');
for (let i of createCounter()) {
  console.log(i);
}
