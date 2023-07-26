1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
for (let i = 0; i < args.length; i ++) {
  if (args[i] < args[0]) {
    args[0] = args[i];
  }
}
return args[0];

  }
}

2. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return (circle.radius * 2 * Math.PI);
    }

3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    const arrOfFive = [];
    for (var key in obj) {
      if (key.length === 5) {
        arrOfFive.push(key);
      }
      if (obj[key].length === 5) {
        arrOfFive.push(obj[key]);
      }
    }
    return arrOfFive;
  }

  // additional

  4. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
  function buildFun(n){

    var res = [];
  
    for (let i = 0; i< n; i++){
      res.push(function(){
        return (i);
      });
    }
    return res;
  }

  5. https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor (name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = 'shark';
  }
  introduce()   {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`; 
                }
}

class Cat extends Animal {
  constructor (name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.status = status;
    this.species = 'cat';
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`; 
  }
}

class Dog extends Animal {
  constructor (name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.status = status;
    this.species = 'dog';
    this.master = master;
  }
  introduce() {  
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`; 
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}