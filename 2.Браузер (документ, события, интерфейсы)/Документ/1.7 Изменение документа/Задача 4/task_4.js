/*
Создайте список
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
*/
let listUl = document.createElement("ul");
document.body.append(listUl);
console.log(listUl);

while (true) {
	let elemText = prompt("Введите содержимое пункта");
	if (!elemText) break;
	let liElem = document.createElement("li");
	liElem.textContent = elemText;
	listUl.append(liElem);
}
