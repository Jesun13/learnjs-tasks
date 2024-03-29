"use strict";
/*
Создать уведомление

Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
Уведомление должно автоматически исчезнуть через 1,5 секунды.

Пример объекта options:

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});
Демо в новом окне

Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.
*/

function showNotification({ top = 0, right = 0, className, html }) {
	let elem = document.createElement("div");

	elem.className = "notification";
	if (className) {
		elem.classList.add(className);
	}
	elem.style.top = top + "px";
	elem.style.right = right + "px";
	elem.innerHTML = html;
	document.body.append(elem);

	setTimeout(() => elem.remove(), 1500);
}

// test it
let i = 1;

let intervalId = setInterval(() => {
	showNotification({
		top: 10,
		right: 10,
		html: "Hello " + i++,
		className: "welcome",
	});
	if (i == 11) {
		clearInterval(intervalId);
	}
}, 2000);
