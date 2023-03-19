/*
Вставьте HTML в список
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/

function getListContent(contentFirst, contentLast) {
	let result = [];
	for (let i = contentFirst; i <= contentLast; i++) {
		let li = document.createElement("li");
		li.append(i);
		result.push(li);
	}
	return result;
}

let liOne = document.getElementById("one");

liOne.after(...getListContent(2, 3));
