// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe('peopleInfo', () => {
  it('returns an array with a sentence about each person with their name capitalized.', () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect((peopleInfo(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]))
  })
})

// I GOT RED
// FAIL  ./code-challenges.test.js
// peopleInfo
//   ✕ returns an array with a sentence about each person with their name capitalized. (4 ms)

// ● peopleInfo › returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: peopleInfo is not defined


// b) Create the function that makes the test pass.

// Pseudo Code
//I create a function called peopleInfo that takes in a parameter 
//Create an empty array to push the capital words too 
//I can loop over the array using .map or use index notion to access each object in the array
//Once I do that I can use object notion to access the key value pairs inside
//I will then split('') the string into two arrays for the name and save this to a variable 
  //I will capitalize each 0th index of the new array
    //Then add the capital letter to the rest of the string using slice
//I will then return the capitalized names and the occupation in a string interpolation.

// const peopleInfo = (arr) => {
//   let newArr = []
//   let arrName = arr[0].name.split(' ')
//    for(let i=0; i<arrName.length; i++){
//        newArr.push(arrName[i][0].toUpperCase() + arrName[i].slice(1))
//    }
//   let newString = newArr.join(' ')
//   return `${newString} is ${arr[0].occupation}`
// }

const peopleInfo = (arr) => {
  let newArr = []
  let finalArr = []
    for(let i=0; i<arr.length; i++){
      let arrName = arr[i].name.split(' ')
        for(let i=0; i<arrName.length; i++){
         var capitalArr = (arrName[i][0].toUpperCase() + arrName[i].slice(1))
         newArr.push(capitalArr)
        }
        let newString = newArr.join(' ')
        finalArr.push(`${newString} is ${arr[i].occupation}`)
      }
    return finalArr
}

// const peopleInfo = (arr) => {
//   let newArr = []
//   let arrName1 = arr[0].name.split(' ')
//   let arrName2 = arr[1].name.split(' ')
//   let arrName3 = arr[2].name.split(' ')
//    for(let i=0; i<arrName1.length; i++){
//        newArr.push(arrName1[i][0].toUpperCase() + arrName1[i].slice(1))
//        var newString1 = newArr.join(' ')
//    }
//     for(let i=0; i<arrName2.length; i++){
//       newArr.push(arrName2[i][0].toUpperCase() + arrName2[i].slice(1))
//       var newString2 = newArr.join(' ')
//       }
//         for(let i=0; i<arrName3.length; i++){
//           newArr.push(arrName3[i][0].toUpperCase() + arrName3[i].slice(1))
//           var newString3 = newArr.join(' ')
//         }
//    return [`${newString1} is ${arr[0].occupation}`, `${newString2} is ${arr[1].occupation}`, `${newString3} is ${arr[2].occupation}`]
// }



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('remainders', () => {
  it('returns an array of only the REMAINDERS of the numbers when divided by 3.', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect((remainders(hodgepodge1)).toEqual( [ 2, 0, -1, 0 ]))
    expect((remainders(hodgepodge2)).toEqual([ 2, 1, -1 ]))
  })
})

// I GOT RED
// FAIL  ./code-challenges.test.js
// remainders
//   ✕ returns an array of only the REMAINDERS of the numbers when divided by 3.
// ● remainders › returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

//Psuedo Code 
//I will create a function call remainders that will have a parameter
//Create an empty array 
//I need to loop over the array
  //I need to see if each index is a number or not if it is push that index into the empty array
//I need to take that empty array and loop over it 
//I will divide each index by 3 with the modulo and return the remainder

const remainders = (arr) => {
//  let emptyArr = []
  return arr.filter((value) => {
    return Number.isInteger(value)
    .forEach(value => {
        let sum = value % 3
        return sum
    });
  })
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
