"use strict";

/*
Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
*/

const albums = [
  {
    title: "Mechanical Animals",
    artist: "Marilyn Manson",
    year: "1998",
  },
  {
    title: "Chocolate Starfish and the Hot Dog Flavored Water",
    artist: "Limp Bizkit",
    year: "2000",
  },
  {
    title: "Министерство несчастья",
    artist: "Б.А.У.",
    year: "2024",
  },
];

// for (const album of albums) {
//   console.log(`${album.title} - ${album.artist} (${album.year})`);
// }
// На этом можно было и закончить

const musicCollection = {
  albums,
  [Symbol.iterator]: function* () {
    for (const album of this.albums) {
      yield album;
    }
  }
}

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}