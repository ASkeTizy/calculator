class Calculator {
	static input_screen = document.getElementsByClassName('input_screen')[0];
	static ans_screen = document.getElementsByClassName('ans_screen')[0];
	static math_expression = '';

	stringParser(str) {
		const numbers_reg = /([0-9.]+|[+-=/*])+?/g;
		const numbers = str.match(numbers_reg);
		let ans = '';

		if (numbers[3] != null) {
		 	ans = this.operator(+numbers[0], +numbers[2], numbers[1]);
		 	if (numbers[1] == '/' && numbers[2] == 0) {
		 		Calculator.ans_screen.innerHTML = '';
		 		Calculator.math_expression = ''; 
				Calculator.input_screen.innerHTML = '';
		 		alert('Division by zero'); 
		 		return;
		 	}
		 	ans = this.numberChecker(ans);
		 	if (numbers[3] == '=') {
		 		Calculator.ans_screen.innerHTML = Calculator.math_expression +''+ ans;
		 		Calculator.math_expression = ans; 
				Calculator.input_screen.innerHTML = ans;
		 	} else {
				Calculator.math_expression = ans + numbers[3];
				Calculator.input_screen.innerHTML = 0;
				console.log(ans);
				Calculator.ans_screen.innerHTML = ans + numbers[3];
		 	}			
		}
	}

	setInputScreen(input) {
		Calculator.input_screen.innerHTML = input;
	}

	numberChecker(number) {
		if (Number.isInteger(number)) return number;
		else return number.toFixed(2);
	}

	deleteNumber() {
		const back_button = document.getElementsByClassName('back')[0];
		back_button.addEventListener('click',() => {
			Calculator.math_expression = Calculator.math_expression.slice(0, -1);
			Calculator.input_screen.innerHTML = Calculator.input_screen.innerHTML.slice(0,-1);
		});
	}
	inputChecker(button) {

		let str = Calculator.math_expression;
		if (str.match(/[0-9.]+|[+-/*]+[0-9.]+?/g) && button == '=')
			Calculator.math_expression += button

		else if (str.match(/[0-9.]+?/g) && button == '='){
			Calculator.math_expression += '';
			console.log(str.match(/[0-9.]+?/g));
		} else if (str.match(/[.]+?/g) && button == '.') {

			Calculator.math_expression += '';
		}
		else Calculator.math_expression += button;
		
			
		
		// if (str.match(/[+-/*]+[.]+?/g))
		// 	Calculator.math_expression += '';		 
	}
	clickNumber() {

		const buttons = document.getElementsByClassName('btn');
		[...buttons].forEach(button => button.addEventListener('click',(event) => {
			if (button.value == 0) {
				Calculator.input_screen.innerHTML = '';
			}
				// Calculator.math_expression += button.innerHTML;
				
				this.inputChecker(button.innerHTML);
				Calculator.input_screen.innerHTML = Calculator.math_expression;
				this.stringParser(Calculator.math_expression);
			}));
	}

	setStartValue() {
		Calculator.input_screen.innerHTML = 0;
		Calculator.ans_screen.innerHTML = '';	
		Calculator.math_expression = '';
	}

	clear() {
		const clear_button = document.getElementsByClassName('cleaner')[0];
		clear_button.addEventListener('click', () =>{
				this.setStartValue();
		})
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
	
	const calculator = new Calculator();

	calculator.clickNumber();
	calculator.clear();
	calculator.deleteNumber();
	console.log(Calculator.input_screen);
}
main();
