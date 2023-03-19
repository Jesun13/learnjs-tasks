/*
Поиск элементов
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.

*/

let table = document.getElementById("age-table");
console.log(table);

let labels = table.getElementsByTagName("label");
console.log(labels);

let firstTd = table.getElementsByTagName("td")[0];
console.log(firstTd);

let form = document.getElementsByName("search")[0];
console.log(form);

let firstInputOfForm = form.getElementsByTagName("input")[0];
console.log(firstInputOfForm);

let lastInputOfForm = form.getElementsByTagName("input")[form.length - 1];
console.log(lastInputOfForm);
