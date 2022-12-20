// MAP PT.1
const numbers = [1, 2, 3, 4]
const newArray = numbers.map((number) => {
    const newNumber = number * 2
    return newNumber
}
)
console.log(numbers)
console.log(newArray)

const students = [
    {name:"Rodolfo", age:25},
    {name: "Maria", age:43},
    {name: "João", age:21},
    {name: "Bruno", age:43},
    {name: "Carla", age:13},
    {name: "Ana", age:20},
    {name: "Julio", age:26},
];
const newStudents = students.map ((student) => {
    const newStudents = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }
    return newStudents
})
console.log (newStudents)

