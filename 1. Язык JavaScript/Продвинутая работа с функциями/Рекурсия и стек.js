///////////1 ===== ВЫЧИСЛИТЬ СУММУ ЧИСЕЛ ДО ДАННОГО 

//С использованием цикла - второй после арифметической прогрессии, потому что выпонит n операций сложения

function sumTo(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(5));
console.log(sumTo(6));

//С использованием рекурсии - самый медленный, потому что будет запоминаться контекст вызовов

function sumTo1(n) {
	if (n == 1) {
		return n;
	} else {
		return n + sumTo1(n - 1);
	}
}

console.log(sumTo1(2));
console.log(sumTo1(3));
console.log(sumTo1(4));
console.log(sumTo1(5));

//С использованием арифметической прогрессии - самый быстрый вариант, потому что выполняет всего три операции для любого n

function sumTo2(n) {
	return (n * (n + 1)) / 2;
}

console.log(sumTo2(2));
console.log(sumTo2(3));
console.log(sumTo2(4));
console.log(sumTo2(5));

///////////2 ===== ВЫЧИСЛИТЬ ФАКТОРИАЛ

function factorial(n) {
	if (n == 1) {
		return n;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

///////////3 ===== ЧИСЛА ФИБОНАЧЧИ

//с использованием рекурсии
function fib(n) {
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(8));

//с использовнаием цикла

function fib1(n) {
	let a = 1;
	let b = 1;

	for (let i = 3; i <= n; i++) {
		let c = a + b;
		[a, b] = [b, c];
	}
	return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(8));

///////////4 ===== ВЫВОД ОДНОСВЯЗНОГО СПИСКА

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

//Рекурсия
function printList(list) {
	console.log(list.value);
	if (list.next) {
		printList(list.next);
	}
}

printList(list);

//цикл

function printList1(list) {
	let print = list;
	while (print) {
		console.log(print.value);
		print = print.next;
	}
}

printList1(list);

///////////5 ===== ВЫВОД ОДНОСВЯЗНОГО СПИСКА В ОБРАТНОМ ПОРЯДКЕ

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

//рекурсия
function printListReverse(list) {
	if (list.next) {
		printListReverse(list.next);
	}
	console.log(list.value);
}

printListReverse(list);

//цикл

function printListReverse1(list) {
	let listArr = [];
	let print = list;

	while (print) {
		listArr.push(print.value);
		print = print.next;
	}

	for (let i = listArr.length - 1; i >= 0; i--) {
		console.log(listArr[i]);
	}
}

printListReverse1(list);