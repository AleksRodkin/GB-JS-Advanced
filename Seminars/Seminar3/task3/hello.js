import { getAuthedLogin, logoutUser } from "./storage.js";

const authedLogin = getAuthedLogin();

const helloMessageEl = document.querySelector('.helloMessage');
const logoutBtnEl = document.querySelector('.logout-button');

if (!authedLogin) {
  alert("Вы не вошли в систему");
  location.href = "login.html";
}

helloMessageEl.textContent = `Ну здравствуй, ${authedLogin}`;

logoutBtnEl.addEventListener('click', () => {
  logoutUser();
  location.href = "login.html";
});