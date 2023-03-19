/*
Найдите координаты точек относительно окна браузера
В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.
Ваш код должен при помощи DOM получить четыре пары координат:


Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.
*/
document.onclick = function (e) {
	// показывает координаты точки клика
	coords.innerHTML = e.clientX + ":" + e.clientY;
};

//верхний левый, внешний угол (это просто).
const field = document.getElementById("field");
let coords1 = field.getBoundingClientRect();
console.log(coords1);

let leftTop = `${coords1.left} - ${coords1.top}`;
console.log(leftTop);

//нижний правый, внешний угол (тоже просто).
let rightBottom = `${coords1.right} - ${coords1.bottom}`;
console.log(rightBottom);

//верхний левый, внутренний угол (чуть сложнее).
let leftTopInner = `${coords1.left + field.clientLeft}- ${
	coords1.top + field.clientTop
}`;
console.log(leftTopInner);

//нижний правый, внутренний угол (есть несколько способов, выберите один).
let rightBottomInner = `${
	coords1.left + field.clientLeft + field.clientWidth
} - ${coords1.top + field.clientTop + field.clientHeight}`;
console.log(rightBottomInner);
