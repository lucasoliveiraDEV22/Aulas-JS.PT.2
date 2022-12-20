// MAP PT.2
const numbers = [1,2,3,4]
const numbersReais = [20,30,10,5]
// const newArray0 = numbers.map (function(number) {
//     return number * 3
// })
// const newArray1 = numbers.map ((number) => {
//     return number * 3
// }) OBS: Dá para fazer nessas duas primeiras formas, mas nós vamos usar a debaixo
//const newArray2 = numbers.map (number => number * 3)
const double = number => number*2
const sum = number => number + 10
const minus = number => number-5
const toReais = number => `R$ ${number.toFixed(2)}`
const newArray2 = numbers.map(double).map(sum).map(minus)
const anotherArray = numbersReais.map(double).map(toReais)
console.log (newArray2)
console.log (anotherArray)
