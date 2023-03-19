/*
Сортировка таблицы

В ней может быть больше строк.

Напишите код для сортировки по столбцу "name".
*/

let tBody = document.getElementsByTagName("tbody");

let tBodyChildren = Array.from(tBody[0].children);

tBodyChildren.sort((a, b) =>
	a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1
);
console.log(tBodyChildren);
tBody[0].append(...tBodyChildren);
