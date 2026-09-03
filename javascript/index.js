const numbers = [3, 8, 12, 5, 19, 21, 2, 14];
const students = [
    {id: 1, name:"sara", grade:18},
    {id: 2, name:"christian", grade:3},
    {id: 3, name:"noel", grade:12},
    {id: 4, name:"edgar", grade:10},
    {id: 5, name:"marvi", grade:8}
]

const products = [
    {id: 1, name:"keyboard", price:120, inStock: true},
    {id: 2, name:"keyboard", price:120, inStock: true},
    {id: 3, name:"keyboard", price:120, inStock: true},
    {id: 4, name:"keyboard", price:120, inStock: true},
]

// 1
numbers.forEach((value)=>{
    console.log("Number: ", value)
})

//2
students.forEach((student) => {
    console.log(student.name+" got "+student.grade+"/20");
})

//3
let firstBiggerThan15 = 0;
for(let i = 0; i < numbers.length -1; i++){
    if(numbers[i] > 15){
        firstBiggerThan15 = numbers[i];
        break;
    }
}
console.log("firstbiggerThan15", firstBiggerThan15);
