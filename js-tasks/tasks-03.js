// Task 1
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0];
      for (let i = 1; i < args.length; i++) {
        if (args[i] < smallest) {
          smallest = args[i];
        }
      }
      return smallest;
    }
}

// Task 2
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
    const circumference = circleCircumference(circle).toFixed(6);
}

// Task 3
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    const resultArray = [];
    for (var key in obj) {
      if (key.length === 5) {
        resultArray.push(key);
      }
      if (obj[key].length === 5) {
        resultArray.push(obj[key]);
      }
    }
    return resultArray;
}

// Task 4
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(N) {
    const result = [];
  
    for (let i = 0; i <= N; i++) {
      result.push(function () {
        return i;
      });
    }
  
    return result;
}

// Task 5
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
}
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
}
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
}
  