let x = prompt("Введите значение 1");
let y = prompt("Введите значение 2");
const func = () => {
	const result = Math.pow(x, y);
	return console.log(result);
}
func();