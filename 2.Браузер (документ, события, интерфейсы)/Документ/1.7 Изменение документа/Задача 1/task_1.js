/*
createTextNode vs innerHTML vs textContent
У нас есть пустой DOM-элемент elem и строка text.

Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text
*/
let text = "<p>text</p>";

let divs = document.querySelectorAll("div");
divs[0].append(document.createTextNode(text)); //1
divs[1].innerHTML = text; //2
divs[2].textContent = text; //3

//Одинаково сработают 1 и 3 способы, т.к. вставят text как строку, а innerHTML вставит как элемент
