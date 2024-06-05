// //Q1
// var input = prompt("please enter any input to reverse it:");
// function reorder(input) {
//   var split_string = input.split("");
//   var reverse_Array = split_string.reverse();
//   var join_Array = reverse_Array.join("");
//   return join_Array;
// }
// alert(reorder(input));

// //Q2
// let num = 15;

// function loop_itrate(num) {
//   let results = [];
//   for (var i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//       results.push(i + " is even");
//     } else {
//       results.push(i + " is odd");
//     }
//   }
//   return results;
// }

// let output = loop_itrate(num);
// console.log(output);

// //Q3
// var input2 = prompt("please enter any input to Order it Alphabetically :");
// function reorder(input2) {
//   var string = input2.toLowerCase().split("").sort().join("");
//   return string;
// }
// alert(reorder(input2));

// // Q4
// let input3 = prompt("Enter your number: ");

// function dash(input) {
//   let result = "";
//   for (let i = 0; i < input.length; i++) {
//     result += input[i];
//     if (input3[i + 1] % 2 == 0 && input3[i] % 2 == 0) {
//       result += "-";
//     }
//   }
//   return result;
// }
// alert(dash(input3));

// //Q5
let Age = prompt("Enter your Age: ");
function Agechecker(Age) {
  let Result = Age >= 18 ? "The user is Adult" : "The user is Minor";
  return Result;
}
alert(Agechecker(Age));
