function term() {
	let a = prompt("Введите первое слагаемое");
	a = +a;
	return function () {
		let b = prompt("Введите второе слагаемое");
		b = +b;
		let sum = a + b;
		alert("Сумма этих чисел равна " + sum);
	}
}

function argTerm() {
}
const resultSum = term(argTerm);
resultSum();