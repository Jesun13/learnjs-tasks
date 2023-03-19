/*
Создать раскрывающееся меню
Создать меню, которое по нажатию открывается либо закрывается:
P.S. HTML/CSS исходного документа можно и нужно менять.
*/
const btn = document.querySelector(".triangle");

const listMenu = document.querySelector(".listMenu");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (btn.classList.contains("close")) {
		btn.innerHTML = "▼";
		btn.classList.add("open");
		btn.classList.remove("close");
		listMenu.classList.remove("hidden");
	} else if (btn.classList.contains("open")) {
		btn.innerHTML = "▶";
		btn.classList.add("close");
		btn.classList.remove("open");
		listMenu.classList.add("hidden");
	}
}
