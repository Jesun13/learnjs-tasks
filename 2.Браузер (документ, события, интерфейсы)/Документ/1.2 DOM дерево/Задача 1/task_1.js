/*
Дочерние элементы в DOM
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
*/

let firstElem = document.body.firstElementChild;
console.log(firstElem);

let secondElem = document.body.children[1];
console.log(secondElem);

let secondLi = secondElem.lastElementChild;
console.log(secondLi);
