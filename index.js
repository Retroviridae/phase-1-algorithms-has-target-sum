const hasTargetSum = (array,target)=> {
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i]
    for (let j = i+1; j < array.length; j++){
      // console.log(`Remainder: ${complement}`)
      // console.log(`array[j]: ${array[j]}`)
      if (array[j]=== complement) return true
    }
  }return false
}



console.log(hasTargetSum([4, 8, 12, 3, 11, 7], 10))
console.log(hasTargetSum([4, 8, 12, 3, 11, 8], 10))
console.log(hasTargetSum([5, 3, 8, 3, 1, 4], 15))
console.log(hasTargetSum([5, 3, 8, 7, 1, 4], 15))
// expect 3,7
/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}

*/

/* 
  iterate over array [i]
    iterate over array j=[i+1]
      if arr[i]+arr[j]= solution{
        return arri + arr j
      }
*/

/*
  Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;
