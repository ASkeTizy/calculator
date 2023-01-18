class Calculator {
	static previosOperand = '';
	static operator = '';
	static currentOperand = '0';
	
	constructor(inputScreen, outputScreen) {
		this.inputScreen = inputScreen;
		this.outputScreen = outputScreen;
	}

	setListeners() {
		const numbers = document.querySelectorAll('[data-number]');
		const operators = document.querySelectorAll('[data-operator]');
		const equal = document.querySelector('[data-equals]');
		numbers.forEach(button => button.addEventListener('click', () => this.addNumber(button.innerHTML)));
		operators.forEach(button => button.addEventListener('click', () => this.addOperator(button.innerHTML)));
		equal.addEventListener('click', () => this.makeResult());
		
	}

	makeResult() {
		if(Calculator.previosOperand != '' && Calculator.currentOperand != '') {
			let res = this.operator(parseFloat(Calculator.previosOperand), parseFloat(Calculator.currentOperand), Calculator.operator);
			console.log(Calculator.currentOperand)
			this.outputScreen.innerHTML = `${Calculator.previosOperand} ${Calculator.operator} ${Calculator.currentOperand} = ${res}`
			Calculator.previosOperand = res;
			Calculator.currentOperand = '';
		}
	}
	addOperator (button) {
		
		if(Calculator.operator !== '' && Calculator.currentOperand !== '' && Calculator.previosOperand !== '') {
			console.log(Calculator.currentOperand);
			console.log(Calculator.previosOperand);
			console.log(Calculator.operator);
			Calculator.previosOperand = this.operator(parseFloat(Calculator.previosOperand), parseFloat(Calculator.currentOperand), Calculator.operator);;
			Calculator.currentOperand = '';
			Calculator.operator = button;
			console.log(Calculator.currentOperand);
			this.outputScreen.innerHTML = `${Calculator.previosOperand} ${Calculator.operator}`;
			this.inputScreen.innerHTML = Calculator.currentOperand;
			return;
		} 
		if (Calculator.operator !== '' && Calculator.previosOperand !== '' && Calculator.currentOperand == '') {
			Calculator.operator = button;
			this.outputScreen.innerHTML = Calculator.previosOperand + Calculator.operator;
			return;
		}
			
			Calculator.previosOperand = Calculator.currentOperand;
			Calculator.operator = button;
			
			this.outputScreen.innerHTML = Calculator.previosOperand + Calculator.operator;
			Calculator.currentOperand = '';
			this.inputScreen.innerHTML = '';
			// if (Calculator.previosOperand != '' && Calculator.currentOperand != '0') {
		
			
		
	}
	addNumber(button) {
		
		if (Calculator.currentOperand === '0' && button !== '.') { 
			Calculator.currentOperand = button;
			
			this.inputScreen.innerHTML = Calculator.currentOperand;
			return;
		}
		if (Calculator.currentOperand === ''  && button == '.') {
			Calculator.currentOperand = '0';
		}
		console.log(typeof Calculator.currentOperand);
		if (Calculator.currentOperand.includes('.') && button == '.'){
			return;
		}
		Calculator.currentOperand += button;
		this.inputScreen.innerHTML = Calculator.currentOperand;
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
	

	setStartValue() {
		Calculator.input_screen.innerHTML = 0;
		Calculator.ans_screen.innerHTML = '';	
		Calculator.math_expression = '';
		Calculator.first_number = '';
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
	inputScreen = document.querySelector('[data-input]');
	ansScreen = document.querySelector('[data-output]');
	console.log(inputScreen);
	const calculator = new Calculator(inputScreen, ansScreen);
	calculator.setListeners();
	
}
main();
}
main();
