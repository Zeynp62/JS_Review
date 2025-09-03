/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and log the larger number. 
If they're equal, log either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    console.log(x)
  } else {
    console.log(y)
  }
}

console.log('Exercise 1 Result:')
maxOfTwoNumbers(3, 9)

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and log 'Adult' if the age is 18 or over and 'Minor' otherwise.
*/

const isAdult = (age) => {
  // Write your code here
}

console.log('Exercise 2 Result:')
isAdult(21)

/*
Exercise 3: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should log a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should log 'johnsmith@example.com'.
*/

const generateEmail = (name, domain) => {
  // Write your code here
}

console.log('Exercise 3 Result:')
generateEmail('johnsmith', 'example.com')

/*
Exercise 4: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and log a personalized 
greeting.

Example: greetUser('Sam', 'morning') should log "Good morning, Sam!"
*/

const greetUser = (name, timeOfDay) => {
  // Write your code here
}

console.log('Exercise 4 Result:')
greetUser('Sam', 'morning')

/*
Exercise 5: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and log the largest among them.

Example: maxOfThree(17, 4, 9) should log 17.
*/

const maxOfThree = (a, b, c) => {
  // Write your code here
}

console.log('Exercise 5 Result:')
maxOfThree(5, 10, 8)

/*
Exercise 6: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should log the amount of the tip.

Example: calculateTip(50, 20) should log 10.
*/

const calculateTip = (bill, tipPercent) => {
  // Write your code here
}

console.log('Exercise 6 Result:')
calculateTip(50, 20)

/*
Exercise 7: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale and log the result.

Example: convertTemperature(32, 'C') should log 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should log 0 (Celsius).
*/

const convertTemperature = (temp, scale) => {
  // Write your code here
}

console.log('Exercise 7 Result:')
convertTemperature(32, 'C')

/*
Exercise 8: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers and log the result.
*/

const basicCalculator = (a, b, operation) => {
  // Write your code here
}

console.log('Exercise 8 Result:')
basicCalculator(10, 5, 'subtract')
