// Task 1
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript  
function stringToArray(string) {
    return string.split(" ");
  }

// Task 2
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    const rna = dna.replace(/T/g, "U");
    return rna;
  }


// Task 3
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    let minValue = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] < minValue) {
        minValue = list[i];
      }
    }
      return minValue;
  };
  var max = function (list) {
    let maxValue = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > maxValue) {
        maxValue = list[i];
      }
    }
      return maxValue;
  };
 
// Task 4
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    const minValue = Math.min(...arr);
    if (toReturn === "value") {
      return minValue;
    } else if (toReturn === "index") {
      return arr.indexOf(minValue);
    }
  }
  

// Task 1 (additional)
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const indexOfWolf = queue.indexOf("wolf");
  for (i = 0; i < queue.length; i ++) {

  if (indexOfWolf === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${indexOfWolf + 1}! You are about to be eaten by a wolf!`;
  }
}
}

// Task 2 (additional)
// https://www.codewars.com/kata/beginner-lost-without-a-map
function doubleArray(singleArray) {
    
  return singleArray.map((value) => value * 2);
}

// Task 3 (additional)
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function findFirstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }

  return null;
}
