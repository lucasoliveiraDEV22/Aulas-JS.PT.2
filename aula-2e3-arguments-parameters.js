/* 
 Function
 Arguments and parameters
 Arguments: sum (2,3)
 Parameters (number1, number2)

*/ 

function sum (number1, number2){
    const result = number1 + number2
    return result
}

const firstNumber = 10
const secondNumber = 15
sum (firstNumber,secondNumber) //SÃO ARGUMENTOS e ()sum INVOCA a FUNÇÃO
//const result = sum (firstNumber,secondNumber)

console.log (`O primeiro número é ${firstNumber}`)
console.log (`O segundo número é ${secondNumber}`)
console.log (`E a soma dos dois é ${sum (firstNumber,secondNumber)}`)