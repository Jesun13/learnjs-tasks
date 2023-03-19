/*
Скрыть элемент по нажатию кнопки

Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
*/

const btn = document.getElementById("hider");
const text = document.getElementById("text");

function hideText() {
	text.style.display = "none";
}

btn.addEventListener("click", hideText);
