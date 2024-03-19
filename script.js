let firstNumber = prompt('Digite o primeiro numero: ')
let secondNumber = prompt('Digite o segundo numero: ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert('A Soma é: ' + sum)
alert('A Subtração é: ' + sub)
alert('A Multiplicação é: ' + multi)
alert('A Divisão é: ' + div)
alert('O Resto é: ' + rest)