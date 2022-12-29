class Calculator {
	stringParser(str) {
		const l = str.match("/\d");
		console.log(l);
	}
	operator(num1, num2, operator) {
		switch(operator) {
			case '+': this.add(num1, num2)
			case '-': this.substract(num1, num2)
			case '*': this.multiply(num1, num2)
			case '/': this.devide(num1, num2)

		}
	}
	add(a, b) {
		return a + b;
	}
	substract(a, b) {
		return a - b;
	}
	multiply(a, b) {
		return a * b;
	}
	devide(a, b) {
		return a / b; 
	}
}
function main() {
	new Calculator().stringParser("B2");
}
main();