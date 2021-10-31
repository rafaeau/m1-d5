// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* const giveMeRandom = function (numberToRandom){
    let array = []
    for (let i=0; i<=numberToRandom; i++){
    array.push(Math.floor(Math.random() * numberToRandom))
    }
    return array
}

const checkArray = function (arr){
    arrSum = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] > 5){
            arrSum.push(arr[i]) && console.log(`${arr[i]} is bigger than 5.`)
        } else if (arr[i] === 5) {
            console.log(`${arr[i]} equals five.`)
        } else {console.log(`${arr[i]} is smaller than 5.`)
        } 
    } return console.log("The sum of the numbers bigger than five is: " + arrSum.reduce((a, b) => a + b, 0))
}

console.log(checkArray(giveMeRandom(10))) */


/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* let shoppingCart = [
    {id: 475, name: "Product1", price: 100, quantity: 1},
    {id: 673, name: "Product2", price: 200, quantity: 1},
    {id: 983, name: "Product3", price: 50, quantity: 2}
]

const shoppingCartTotal = function (array) {
    arrSum = []
    let sum
    for (let i=0; i<array.length; i++){
        sum = ((shoppingCart[i][2] * shoppingCart[i][3]) && (arrSum.push(sum)))
    } result = arrSum.reduce((a, b) => a + b, 0)
    return result
}

console.log(shoppingCartTotal(shoppingCart)) */

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* let shoppingCart = [
    {id: 475, name: "Product1", price: 100, quantity: 1},
    {id: 673, name: "Product2", price: 200, quantity: 1},
    {id: 983, name: "Product3", price: 50, quantity: 2}
]

const addToShoppingCart = function(objectToAdd){
    shoppingCart.push(objectToAdd)
    numberOfItems = shoppingCart.length
return console.log("The total number of items is now: " + numberOfItems)
}

product4 = {id: 945, name: "Product4", price: 75, quantity: 1}
console.log(addToShoppingCart(product4)) */

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* let shoppingCart = [
    {id: 475, name: "Product1", price: 100, quantity: 1},
    {id: 673, name: "Product2", price: 200, quantity: 1},
    {id: 983, name: "Product3", price: 50, quantity: 2}
]

const maxShoppingCart = function (array){
    tempArray=[]
    for (let i=0; i<array.length; i++){
       tempArray.push(array[i][2])
       console.log(Math.max(...tempArray))
    } return console.log(tempArray)
}

console.log(maxShoppingCart(shoppingCart)) */

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
