/*
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не 
являются стандартными массивами, но похожи на них. Однако у таких коллекций 
нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы 
научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
 
Задание 3: 
Напишите функцию, которая собирает все элементы <div> на странице, преобразует 
их в массив и фильтрует только те из них, у которых есть атрибут data-active.
Выведите отфильтрованный результат в консоль.
*/
 
{/* <div>Element 1</div>
<div data-active="true">Element 2</div>
<div>Element 3</div>
<div>Element 4</div>
<div data-active="false">Element 5</div> */}

const divEl = document.querySelectorAll('div');
//console.log(divEl); // NodeList, нет многих методов массива

// const divsArray = Array.from(divEl); // шо то
const divsArray = [...divEl]; // шо это
console.log(divsArray);

const filteredArr = divsArray.filter((element) => {
  return element.hasAttribute("data-active")
});

console.log(filteredArr);