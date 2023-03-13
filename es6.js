const numbers = [89, 35, 98, 12];

const student = {
    name : 'rajib reza',
    age : 22,
    story : 'aim in life',
    assinment : ['first','two','three']
};

//  essix er template string 
const about = `My Name is &{student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.assinment[0]}`;

console.log(about);

//  2. arrow function 

const getFityFive = () => 55;

const addSixtkyFive = num => num + 65;

const isEven = x => x%2 == 0;

const addThree = (x,y, z) => x + y + z;

const doMathMultiLine = (num1, num2) => {
const sum = num1 + num2;

return sum;

}

//  spread operator
const newNumbers = [...numbers];
const currentNumber = [...numbers, 55];

const newNumbers = numbers;
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);
console.log(newNumbers);

//  create a new array from an older array and add an element 

// const currentNumber = [...numbers, 55]

console.log(numbers);
console.log(newNumbers);
console.log(currentNumber);