let min = prompt("Введите значение 1");
let max = prompt("Введите значение 2");

function printNumbers() {
	let current = min;

	let timerId = setInterval(function () {
		console.log(current);
		if (current == max) {
			clearInterval(timerId);
		}
		current++;
	}, 1000);
};
printNumbers();
