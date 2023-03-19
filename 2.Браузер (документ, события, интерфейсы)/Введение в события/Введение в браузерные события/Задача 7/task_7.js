/*
Карусель
Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.
 */

// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
let i = 1;
for (let li of document.querySelectorAll("li")) {
	li.style.position = "relative";
	li.insertAdjacentHTML(
		"beforeend",
		`<span style="position:absolute;left:0;top:0">${i}</span>`
	);
	i++;
}

// ...ваш код, который сделает карусель рабочей
let width = 130;
let count = 3;

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

carousel.querySelector(".prev").onclick = function () {
	position += width * count;
	position = Math.min(position, 0);
	list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
	position -= width * count;
	position = Math.max(position, -width * (listElems.length - count));
	list.style.marginLeft = position + "px";
};
