/*
Расположите заметку внутри элемента (абсолютное позиционирование)

Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): 
научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
Например:

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note);
*/

/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */

function positionAt(anchor, position, elem) {
	let anchorCoords = getCoords(anchor);

	switch (position) {
		case "top":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
			break;

		case "right":
			elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
			elem.style.top = anchorCoords.top + "px";
			break;

		case "bottom":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
			break;
	}
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
	};
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
	let note = document.createElement("div");
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);

	positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
