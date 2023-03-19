///////////1 ===== Установка и уменьшение значения счётчика
function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	}

	counter.set = (value) => (count = value);

	counter.decrease = () => count--;

	return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter());

///////////2 ===== Сумма с произвольным количеством скобок

function sum(a) {
	let currentSum = a; //1

	function f(b) {
		currentSum += b;
		return f;
	}

	f.toString = function () {
		return currentSum;
	};

	return f;
}

console.log(sum(1)(2) == 3); // 3
alert(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15