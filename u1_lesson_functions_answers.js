// 1. Write a function that console.logs 'Hello World'
const sayHello = () => {
  console.log('HELLO WORLD')
}
sayHello() //calling function

// 2.  Write a function that console.logs whatever you want it to say
let message = 'Welcome to SEB10'
const myMassage = (message) => {
  console.log(`this is my message: ${message}.`)
}
myMassage(message) //calling function

// 3.  Write a function that prints every number between 1 and 100
const printNumbers = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i)
  }
}
printNumbers() //calling function
// 4. Write a function that takes an array of numbers as a parameter and adds each element of that array to a counter and prints the final value of the counter (i.e. the sum of all of the numbers in the array)
const sumNumbers = (numbers) => {
  let totalCount = 0
  for (let i = 0; i < numbers.length; i++) {
    totalCount = numbers[i] + totalCount
  }
  console.log(count)
}
sumNumbers([1, 2, 3, 4, 5])
// 5. Write a function that loops over the following array of SEI students and prints out their name.
const students = [
  'Noor',
  'Ali',
  'Sami',
  'Dana',
  'Rami',
  'Layan',
  'Rian',
  'Amal',
  'Samar',
  'Tala',
  'Zahraa',
  'Ira',
  'Reem',
  'Yanis',
  'Yasmeen'
]
const studentsNames = (students) => {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i])
  }
}
studentsNames(students)

// 6. Write a function that takes an array of strings as a parameter and returns an array of numbers corresponding to the lengths of each word. e.g. passing this function an array ['i', 'am', 'the', 'best'] should give you back [1, 2, 3, 4] Hint: you can call .length on a string!
const countStrings = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    console.log(strings[i].length)
  }
}
countStrings(['i', 'am', 'the', 'best'])
// 7. Write a function that takes 3 parameters and returns one number, which is the product of the first two numbers raised to the power of the third. e.g. passing this function 1, 2, 3 should give you back the answer to (1 * 2)^3
const productPower = (n1, n2, n3) => {
  console.log(Math.pow(n1 * n2, n3))
}
productPower(1, 2, 3) //calling function
// 8. Write a function that prints every EVEN number between 1 and 100
const evenNumbers = () => {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i)
  }
}
evenNumbers() //calling function
