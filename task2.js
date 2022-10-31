let n = prompt("Введите положительное число, не превышающее 1000");
function test_prime() {
	if (n <= 1000) {
		if (n === 1) {
			return alert("Число не является целым");
		}
		else if (n === 2) {
			return alert("Число целое");
		} else {
			for (var x = 2; x < n; x++) {
				if (n % x === 0) {
					return alert("Число не является целым");
				}
			}
			return alert("Число целое");
		}
	} else {
		alert("Данные неверны, повторите ввод");
	}
}
test_prime();