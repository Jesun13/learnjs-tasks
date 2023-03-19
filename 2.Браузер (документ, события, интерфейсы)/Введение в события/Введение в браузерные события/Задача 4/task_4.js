/*
Передвиньте мяч по полю
Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
*/

const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", (event) => {
	let fieldCoords = event.currentTarget.getBoundingClientRect();

	let ballCoords = {
		top:
			event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
		left:
			event.clientX -
			fieldCoords.left -
			field.clientLeft -
			ball.clientWidth / 2,
	};

	// запрещаем пересекать верхнюю границу поля
	if (ballCoords.top < 0) ballCoords.top = 0;

	// запрещаем пересекать левую границу поля
	if (ballCoords.left < 0) ballCoords.left = 0;

	// // запрещаем пересекать правую границу поля
	if (ballCoords.left + ball.clientWidth > field.clientWidth) {
		ballCoords.left = field.clientWidth - ball.clientWidth;
	}

	// запрещаем пересекать нижнюю границу поля
	if (ballCoords.top + ball.clientHeight > field.clientHeight) {
		ballCoords.top = field.clientHeight - ball.clientHeight;
	}

	ball.style.left = ballCoords.left + "px";
	ball.style.top = ballCoords.top + "px";
});
