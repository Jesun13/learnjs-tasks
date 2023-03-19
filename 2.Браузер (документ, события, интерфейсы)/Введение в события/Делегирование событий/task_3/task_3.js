/*
Сортируемая таблица
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.
Сортировка должна поддерживать только типы "string" и "number".
P.S. Таблица может быть большой, с любым числом строк и столбцов.
*/
let grid = document.getElementById("grid");

grid.addEventListener("click", (e) => {
	if (e.target.tagName != "TH") return;

	let th = e.target;
	sortGrid(th.cellIndex, th.dataset.type);
});

function sortGrid(colNum, type) {
	let tbody = grid.querySelector("tbody");

	let rowsArray = Array.from(tbody.rows);

	let compare;

	switch (type) {
		case "number":
			compare = function (rowA, rowB) {
				return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
			};
			break;
		case "string":
			compare = function (rowA, rowB) {
				return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
					? 1
					: -1;
			};
			break;
	}

	rowsArray.sort(compare);

	tbody.append(...rowsArray);
}
