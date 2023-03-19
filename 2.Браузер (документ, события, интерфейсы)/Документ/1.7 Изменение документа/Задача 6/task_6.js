/*
Выведите список потомков в дереве
Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте.
*/

let lis = document.getElementsByTagName("li");
console.log(lis);

for (let li of lis) {
	let counter = li.getElementsByTagName("li").length;

	if (!counter) continue;
	console.log(li.firstChild);
	li.firstChild.data += `[${counter}]`;
}
