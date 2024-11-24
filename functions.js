// Part 1
const print = function(message) {
  console.log(message);
};

// print("Hello, world!");

// Part 2
// Define a function called multiply that takes two parameters: a and b. 
// When invoked, multiply a times b. If b an argument is not passed in for b, 
// then double a(i.e.multiply it by two).
function multiply(num1 = 5, num2 = 5){
  const total = num1 * num2
  console.log(total)
}

// multiply(10)

// Part 3
// Define a function called maxOfTwoNumbers that takes two numbers as
// arguments and returns the largest of them. If they are the same, return that
// number. Math.max method is not allowed. Math.max(10, 15) => returns 15

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(num1)
  } else {
    console.log(num2)
  }
}


// maxOfTwoNumbers(10, 15)
// maxOfTwoNumbers(50, 15)
// maxOfTwoNumbers(100, 150)


// Part 4
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1)
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2)
  } else {
    console.log(num3)
  }
}

// Part 5

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
  }

  console.log(sum)
}


sumArray([10, 15, 2, 7])
sumArray([1, 4, 40, 13, -7, -50, 100, -17])