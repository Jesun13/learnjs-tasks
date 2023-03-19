/*
Сделайте внешние ссылки оранжевыми
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
*/

let links = document.querySelectorAll("a");

for (let link of links) {
	let linkAttr = link.getAttribute("href");

	if (linkAttr == null) continue;

	if (!linkAttr.includes("http://internal.com") && linkAttr.includes("://")) {
		link.style.color = "orange";
	}
}
