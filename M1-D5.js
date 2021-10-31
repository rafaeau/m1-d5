/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area = function(l1, l2){
    let result = l1 * l2
    return result
}

console.log(area(3, 2))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (int1, int2){
    let result = int1 === int2 ? (int1 + int2) * 3 : int1 + int2
    return result
}

console.log(crazySum(2, 2))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (num){
    let result = num > 19 ? Math.abs(num - 19) * 3 : num - 19
    return result
}

console.log(crazyDiff(22))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n){
    let result = ((n > 20) && (n <= 100)) || (n === 400) ? true : false
    return result
}

console.log(boundary(25))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (string){
    let result = string.startsWith("Strive") ? string : "Strive " + string
    return result
}

console.log(strivify("School is located in Berlin."))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (number){
    if (number > 0) {
        if (number % 3 === 0) {console.log(`${number} is a multiple of 3.`)
        } else if (number % 7 === 0) {console.log(`${number} is a multiple of 7.`)
        } else {console.log(`${number} is not a multiple of 3 or 7.`)}
    } else {console.log(`${number} is not a positive number, please insert a positive number to continue.`)}
    return
}

console.log(check3and7(9))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

const reverseString = function (stringToReverse){
    let result = stringToReverse.split("").reverse().join("")
    return result
}

console.log(reverseString("Rafael Ferreira"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFisrt = function (wordPar){
    let result = wordPar[0].toUpperCase() + wordPar.slice(1)
    return result
}

console.log(upperFisrt("rafael"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function (stringToCut){
    let result = stringToCut.slice(1, -1)
    return result
}
console.log(cutString("Rafael Ferreira"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (numberToRandom){
    let arr = []
    for (let i=0; i<=numberToRandom; i++){
    let result = arr.push(Math.floor(Math.random() * numberToRandom))
    }
    return arr
}

console.log(giveMeRandom(5))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
