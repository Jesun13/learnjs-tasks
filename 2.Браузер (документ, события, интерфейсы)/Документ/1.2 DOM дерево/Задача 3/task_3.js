/*
Выделите ячейки по диагонали
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
*/
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
	let row = table.rows[i];
	row.cells[i].style.backgroundColor = "red";
}
