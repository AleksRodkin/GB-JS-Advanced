"use strict";

/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:

```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```

Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const inputEl = document.querySelector(".number-input");
const buttonEl = document.querySelector(".check-button");
const messageEl = document.querySelector(".message");

buttonEl.addEventListener("click", () => {
  try {
    if (!Number.isFinite(+inputEl.value) || inputEl.value === "") {
      throw new Error("Не число");
    }
    messageEl.innerHTML = "Число";
  } catch (error) {
    messageEl.innerHTML = error.message;
  }
});

// buttonEl.addEventListener("click", () => {
//   if (Number.isFinite(+inputEl.value) && inputEl.value !== "") {
//     messageEl.innerHTML = "Число";
//   } else {
//     messageEl.innerHTML = "Не число";
//   }
// });
