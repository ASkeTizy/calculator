class Calculator {
	static screen = document.getElementsByClassName('screen')[0];
	stringParser(str) {
		const numbers_reg = /([0-9.]+|[+-=/*])+?/g;
		const numbers = str.match(numbers_reg);
	 	const ans = this.operator(+numbers[0], +numbers[2], numbers[1]);
	 	return this.numberChecker(ans);	
	}
	
	numberChecker(number) {
		if (Number.isInteger(number)) return number;
		else return number.toFixed(2);
	}
	clickNumber() {
		const buttons = document.getElementsByClassName('btn');
		console.log(1);
		[...buttons].forEach(button => button.addEventListener('click',(event) => {
			console.log(1);
				Calculator.screen.innerHTML = button.innerHTML;
			}))
	}
	operator(num1, num2, operator) {
		switch(operator) {
			case '+': return this.add(num1, num2)
			case '-': return this.substract(num1, num2)
			case '*': return this.multiply(num1, num2)
			case '/': return this.devide(num1, num2)
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
	console.log(1);
	const ans = new Calculator().stringParser("1/3");
	new Calculator().clickNumber();
	
	
	console.log(Calculator.screen);
}
main();
