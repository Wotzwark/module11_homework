let arr = [1, 2, 3, 3, 5, 5,];
let odd = 0;
let even = 0;
let nul = 0;
function evenElem() {
	console.log("Количество четных элементов = " + even);
}
function oddElem() {
	console.log("Количество нечетных элементов = " + odd);
}
function nulElem() {
	console.log("Количество нулевых элементов = " + nul);
}
for (let i = 0; i < arr.length; i++) {
	if (i % 2 === 0) {
		even++;
	} else if (i === 0) {
		nul++;
	} else {
		odd++;
	}
}

evenElem();
oddElem();
nulElem();