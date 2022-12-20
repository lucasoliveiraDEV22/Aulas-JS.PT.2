// AULA 16- REDUCE
const list = [1,2,3,4]
// const sum = list.reduce ((acc,current) =>{
//     console.log ('acumulador', acc)
//     console.log ('valor atual', current)
//     return acc + current
// }, 5)

const myReduce = (acc, current) => acc+current
const sum = list.reduce (myReduce,0)
console.log ('valor total', sum)