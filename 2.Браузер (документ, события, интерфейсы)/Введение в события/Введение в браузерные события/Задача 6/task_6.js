/*
Добавить кнопку закрытия
Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
*/
let panes = document.querySelectorAll(".pane");

for (let pane of panes) {
	pane.insertAdjacentHTML(
		"afterbegin",
		'<button class="remove-button">[x]</button>'
	);
	pane.firstChild.onclick = () => pane.remove();
}
