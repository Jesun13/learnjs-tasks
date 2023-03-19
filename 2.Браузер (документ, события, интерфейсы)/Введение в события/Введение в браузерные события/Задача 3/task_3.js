/*
Какой обработчик запустится?

В переменной button находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);
*/

const button = document.getElementById("button");

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

//Выведется 1, потом 2. В removeEventListener нужно передать ту же самую функцию, что и в addEventListener
//onclick тоже сработает, потому что есть возможность вешать и addEventListener и onclick
