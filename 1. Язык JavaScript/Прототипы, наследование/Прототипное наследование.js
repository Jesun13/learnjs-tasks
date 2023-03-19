////////////2 -Алгоритм поиска

let head = {
	glasses: 1,
};

let table = {
	pen: 3,
	__proto__: head,
};

let bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table,
};

let pockets = {
	money: 2000,
	__proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

//Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
//неважно откуда берется свойство, движок запомнит где было найдено свойство


////////////3 - Почему наедаются оба хомяка?

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	},
};

let speedy = {
	stomach: [],
	__proto__: hamster,
};

let lazy = {
	stomach: [],
	__proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple
