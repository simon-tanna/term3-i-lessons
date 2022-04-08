function calculationOperation(number, mathOperation) {
    if (!mathOperation)
      return number;
    else
      return mathOperation(number);
  }
    
  function zero(mathOperation) {
    return calculationOperation(0, mathOperation);
  }
  
  function one(mathOperation) {
    return calculationOperation(1, mathOperation);
  }
  function two(mathOperation) {
    return calculationOperation(2, mathOperation);
  }
  function three(mathOperation) {
    return calculationOperation(3, mathOperation);
  }
  function four(mathOperation) {
    return calculationOperation(4, mathOperation);
  }
  function five(mathOperation) {
    return calculationOperation(5, mathOperation);
  }
  function six(mathOperation) {
    return calculationOperation(6, mathOperation);
  }
  function seven(mathOperation) {
    return calculationOperation(7, mathOperation);
  }
  function eight(mathOperation) {
    return calculationOperation(8, mathOperation);
  }
  function nine(mathOperation) {
    return calculationOperation(9, mathOperation);
  }
  
//   function plus(a) {
//     return function(b) {
//       return b + a;
//     }
//   }

  function plus(a) {
      return (b) => {
          return b + a;
      }
  }

//   function minus(a) {
//       return function(b) {
//         return b - a;
//     }
//   }

function minus(a) {
    return (b) => {
      return b - a;
  }
}
//   function times(a) {
//         return function(b) {
//           return b * a;
//     }
//   }
function times(a) {
    return (b) => {
      return b * a;
}
// }
//   function dividedBy(a) {
//         return function(b) {
//           return b / a |0;
//     }
//   }

}
function dividedBy(a) {
      return (b) => {
        return b / a |0;
  }
}

console.log(seven(times(five())));
console.log(seven(dividedBy(five())));