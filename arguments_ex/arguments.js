function sum(args) {
  let input = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

function sum(...args) {
  let sum = 0;
  args.forEach((el) => sum += el);
  return sum;
}

// console.log(sum(1,2,3));

Function.prototype.myBind = function(context, ...args) {
  // let input = args;
  return (...input) => {
    return this.apply(context, args.concat(input));
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];
  
  return function _curriedSum(num) {
    numbers.push(num);
    console.log(numbers);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((el) => sum += el);
      return sum;
    } else {
      return _curriedSum;
    }
  }; 
}

// let sumsum = curriedSum(3);
// console.log(sumsum(1));
// console.log(sumsum(2));
// console.log(sumsum(3));
// console.log(sumsum(1)(2)(3));
// console.log(curriedSum(3)(1)(2)(3));

// Function.prototype.curry = function(numArgs) {
//   let input = [];
//   let _func = (arg) => {
//     input.push(arg);

//     if (numArgs === input.length) {
//       return this(...input);
//     } else {
//       return _func;
//     }
//   };
//   return _func;
// };

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// sumThree(4, 20, 6); // == 30
// console.log(sumThree.curry(3)(4)(20)(6));


Function.prototype.curry = function(numArgs) {
  let input = [];
  let that = this;
  return function _func(arg) {
    input.push(arg);

    if (numArgs === input.length) {
      return that.apply(null,input);
    } else {
      return _func;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
sumThree(4, 20, 6); // == 30
console.log(sumThree.curry(3)(4)(20)(6));