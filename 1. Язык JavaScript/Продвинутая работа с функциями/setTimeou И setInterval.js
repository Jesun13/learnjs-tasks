///////////1 ===== Вывод каждую секунду

function printNumbers(from, to) {
	let current = from;

	let timerId = setInterval(() => {
		console.log(current);
		if (current == to) {
			clearInterval(timerId);
		}
		current++;
	}, 1000);
}