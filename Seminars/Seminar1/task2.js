
/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

// const library = {
//   books,
//   // функция генератор* - из неё можно возвращать несколько значений, поэтому не return, а yield
//   // один вариант написания. Функция продолжает работу с того момента, где "закончилась"
//   // [Symbol.iterator]: function* () { 
//   //   for (const book of this.books) {
//   //     yield book;
//   //   }
//   // }
//   // другой вариант написания 
//   *[Symbol.iterator]() { 
//     for (const book of this.books) {
//       yield book;
//     }
//   }
// }

// распишем как это работает

const library = {
  books,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.books.length) {
          return {
            value: this.books[index++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      }
    }
  }
}

// for (const book of library) {
//   console.log(book);
// }

const iterator = library[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const book of library) {
  console.log(book);
}