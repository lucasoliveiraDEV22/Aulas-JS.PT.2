/*FUNÇÃO ANÔNIMA - armazena a função em uma variável*/ 
const sum = function (number1, number2){
    const result = number1 + number2
    return result
}
const result = sum (1,2)
console.log (`E a soma dos dois é ${sum (1,2)}`)