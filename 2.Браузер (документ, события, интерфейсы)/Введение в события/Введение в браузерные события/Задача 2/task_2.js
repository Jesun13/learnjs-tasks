/*
Спрятать себя

Создайте кнопку, которая будет скрывать себя по нажатию.
*/

const btn = document.createElement("button");
btn.innerHTML = "Нажми меня и я спрячусь!";
document.body.append(btn);

btn.addEventListener("click", (event) => {
	event.currentTarget.style.display = "none";
});
