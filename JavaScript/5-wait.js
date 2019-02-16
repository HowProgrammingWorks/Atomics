'use strict';

const buffer = new SharedArrayBuffer(40);

const array = new Int32Array(buffer);
console.dir({ array });

const w1 = Atomics.wait(array, 5, 0, 1000);
console.dir({ w1 });

const w2 = Atomics.wait(array, 5, 111);
console.dir({ w2 });

setTimeout(() => {
  Atomics.store(array, 5, 222);
  console.log(Atomics.notify(array, 5));
}, 2000);

//const w3 = Atomics.wait(array, 5, 0);
//console.dir({ w3 });

console.dir({ array });
