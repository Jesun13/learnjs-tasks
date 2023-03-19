////////////////////- 1 - Изменяем "prototype"
/*
Изменяем "prototype"

В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
*/
//Сначала у нас есть такой код:
//1
function Rabbit1() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit1 = new Rabbit1();

alert(rabbit1.eats); // true

//Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
//2
function Rabbit2() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit2 = new Rabbit2();

Rabbit.prototype = {};

alert(rabbit2.eats); //  true

//А если код такой (заменили одну строчку)?
//3
function Rabbit3() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit3 = new Rabbit3();

Rabbit.prototype.eats = false;

alert(rabbit3.eats); // false

//Или такой (заменили одну строчку)?
//4

function Rabbit4() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

alert(rabbit4.eats); // true

//Или, наконец, такой:

function Rabbit5() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit5 = new Rabbit5();

delete Rabbit.prototype.eats;

alert(rabbit5.eats); // undefined



//////////////////////////2 - Создайте новый объект с помощью уже существующего

function Obj1(prop) {
	this.prop = prop;
}

let obj = new Obj1("prop1");
console.log(obj.prop); //prop1

let obj2 = new obj.constructor("prop2");
console.log(obj2.prop); //prop2

//Не сработает

function Obj2(prop) {
	this.prop = prop;
}

Obj2.prototype = {};

let obj3 = new Obj2("prop3");
console.log(obj3.prop); //prop3
let obj4 = new obj3.constructor("prop4");
console.log(obj4.prop); //undefined