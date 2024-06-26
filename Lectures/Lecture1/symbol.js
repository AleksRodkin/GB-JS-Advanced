// const symbol = Symbol();

// const dogID = Symbol('dog');

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1 === dog2); // false


//------------------------------------------------------

// const dogID = Symbol('super dog');
// console.log(dogID.description); // super dog

//------------------------------------------------------

let id = Symbol('dogID');

let buddy = {
  [id]: 'Жучка'
}

console.log(buddy[id]); // Жучка

buddy[id] = 'Бобик';

console.log(buddy[id]); // Бобик

