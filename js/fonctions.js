class Calculator {
    constructor(previousTextElement, currentTextElement) {
      this.previousTextElement = previousTextElement
      this.currentTextElement = currentTextElement
      this.clear()
    }
  
    clear() {
      this.current = ''
      this.previous = ''
      this.operation = undefined
    }
  
    delete() {
      this.current = this.current.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.current.includes('.')) return
      this.current = this.current.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.current === '') return
      if (this.previous !== '') {
        this.compute()
      }
      this.operation = operation
      this.previous = this.current
      this.current = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previous)
      const current = parseFloat(this.current)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case 'x':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.current = computation
      this.operation = undefined
      this.previous = ''
    }
  
    updateDisplay() {
      this.currentTextElement.innerText =
        this.current
      if (this.operation != null) {
        this.previousTextElement.innerText =
          `${this.previous} ${this.operation}`
      } else {
        this.previousTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('.number')
  const operationButtons = document.querySelectorAll('.operator')
  const equalsButton = document.querySelector('.equal')
  const deleteButton = document.querySelector('.delete')
  const allClearButton = document.querySelector('.all-clear')
  const previousTextElement = document.querySelector('.previous')
  const currentTextElement = document.querySelector('.current')
  
  const calculator = new Calculator(previousTextElement, currentTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })