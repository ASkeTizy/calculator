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
		const clearAllButton = document.querySelector('[data-clear]');
		const backButton = document.querySelector('[data-back]');
		numbers.forEach(button => button.addEventListener('click', () => this.addNumber(button.innerHTML)));
		operators.forEach(button => button.addEventListener('click', () => this.addOperator(button.innerHTML)));
		equal.addEventListener('click', () => this.makeResult());
		clearAllButton.addEventListener('click', () => this.clearAll());
		backButton.addEventListener('click', () => this.back());
	}
	clearAll() {

		Calculator.previosOperand = '';
		Calculator.currentOperand = '0';
		Calculator.operator = '';
		this.inputScreen.innerHTML = Calculator.currentOperand;
		this.outputScreen.innerHTML = '';
	}
	back() {

		Calculator.currentOperand = Calculator.currentOperand.slice(0, -1);
		this.inputScreen.innerHTML = Calculator.currentOperand;
	}
	makeResult() {
		if (Calculator.currentOperand == 0 && Calculator.operator == '/') {
			alert('division by zero');
			this.clearAll();
			return;
		}
		if (Calculator.previosOperand != '' && Calculator.currentOperand != '') {
			let res = this.operator(parseFloat(Calculator.previosOperand), parseFloat(Calculator.currentOperand), Calculator.operator);
			console.log(Calculator.currentOperand)
			this.outputScreen.innerHTML = `${Calculator.previosOperand} ${Calculator.operator} ${Calculator.currentOperand} = ${res}`
			Calculator.previosOperand = res;
			Calculator.currentOperand = '';
		}
	}
	addOperator (button) {
		
		if(Calculator.operator !== '' && Calculator.currentOperand !== '' && Calculator.previosOperand !== '') {
			if (Calculator.currentOperand == 0 && Calculator.operator == '/') {
			alert('division by zero');
			this.clearAll();
			return;
		}
			Calculator.previosOperand = this.operator(parseFloat(Calculator.previosOperand), parseFloat(Calculator.currentOperand), Calculator.operator);;
			Calculator.currentOperand = '';
			Calculator.operator = button;
			
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

		
			console.log(Calculator.operator, Calculator.currentOperand, Calculator.previosOperand);
		// 	
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
	

	operator(num1, num2, operator) {

		switch(operator) {
			case '+': return this.add(num1, num2)
			case '-': return this.substract(num1, num2)
			case '*': return this.multiply(num1, num2)
			case '/': return this.devide(num1, num2)
		}
	}

	add(a, b) {
		return (a + b).toFixed(2); ;
	}

	substract(a, b) {
		return (a - b).toFixed(2); ;
	}

	multiply(a, b) {
		return (a * b).toFixed(2); ;
	}

	devide(a, b) {
		
		return (a / b).toFixed(2); 
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
