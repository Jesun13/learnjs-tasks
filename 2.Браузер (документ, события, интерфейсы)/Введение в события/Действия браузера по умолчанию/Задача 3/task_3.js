/*
Галерея изображений
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
P.S. Используйте делегирование.
*/
let thumbs = document.getElementById("thumbs");

thumbs.onclick = function (event) {
	let thumbnail = event.target.closest("a");

	if (!thumbnail) return;
	showThumbnail(thumbnail.href, thumbnail.title);
	event.preventDefault();
};

function showThumbnail(href, title) {
	largeImg.src = href;
	largeImg.alt = title;
}
