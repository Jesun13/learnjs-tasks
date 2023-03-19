/*
Считаем потомков
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/
let lies = document.querySelectorAll("li");
console.log(lies);

for (let li of lies) {
	let title = li.firstChild.data.trim();
	let count = li.getElementsByTagName("li").length;

	console.log(`${title}: ${count}`);
}
