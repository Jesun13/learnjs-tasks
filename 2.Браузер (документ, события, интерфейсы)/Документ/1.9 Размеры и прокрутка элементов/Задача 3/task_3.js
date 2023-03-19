/*
Поместите мяч в центр поля
Каковы координаты центра поля?

Вычислите их и используйте, чтобы поместить мяч в центр поля:
Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. 
Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».
*/

const field = document.getElementById("field");
const ball = document.getElementById("ball");

ball.style.left = field.clientWidth / 2 - ball.offsetWidth / 2 + "px";
ball.style.top = field.clientHeight / 2 - ball.offsetHeight / 2 + "px";
