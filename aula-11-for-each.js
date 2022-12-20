// AULA 11: For Each (pegando exemplo da aula)
const students = [
    { name: "Rodolfo", age: 25 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43},
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Júlio", age: 26 },
];

let allStudentsAge = 0
// students.forEach ((student,index,array) => {    
//     console.log (array)
//     }
// )

students.forEach ((student,index) => {    
    allStudentsAge +=  student.age
    }
)
const averageAge = allStudentsAge/students.length
console.log (`A média dos alunos é de ${averageAge.toFixed(0)}`)
