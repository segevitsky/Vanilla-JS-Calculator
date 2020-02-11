const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


keys.addEventListener('click', e => {
    
    if (e.target.matches('button')) {
        const previousKeyType = calculator.dataset.previousKeyType;
        const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;
		const displayedNum = display.textContent; // The text value inside the our calculator screen
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
              display.textContent = keyContent
            } else {
              display.textContent = displayedNum + keyContent
            }
          }
		if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            console.log(action)
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action
        }
        
		if (action === 'decimal') {
            display.textContent += '.';
		}
		if (action === 'clear') {
            display.textContent = '0';
		}
		if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue; 
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            console.log(secondValue)

            display.textContent = calculate(firstValue,operator,secondValue)

        }
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
	}
});





const calculate = (x,operator,y) => {
    var answer;
    
    switch(operator) {
      case 'add': 
      return parseFloat(x)+parseFloat(y);
      break;
      
      case 'subtract':
      return parseFloat(x)-parseFloat(y);
      break;
      
      case 'multiply':
      return parseFloat(x)*parseFloat(y);
      break;
      
      case 'divide':
      return parseFloat(x)/parseFloat(y);
      break;

      default:
      return parseFloat(y);
      break;
    }

    return answer;
}