import { loginUser } from "./storage.js";

const loginEl = document.querySelector('.login');
const passwordEl = document.querySelector('.password');
const loginBtnEl = document.querySelector('.login-btn');

loginBtnEl.addEventListener('click', () => {
  const login = loginEl.value;
  const password = passwordEl.value;
  try {
    loginUser(login, password);
    location.href = 'hello.html';
  } catch (error) {
    alert(error.message);
  }
});