/*
Спрячьте сообщения с помощью делегирования
Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.
*/
const container = document.getElementById("container");

container.addEventListener("click", (event) => {
	if (event.target.className != "remove-button") return;
	event.target.closest(".pane").remove();
});
