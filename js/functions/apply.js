//what is apply ?

//It is a built-in function in js
//Available on function objects.
//It invokes function immediately

//why we use it ?
// It allows you to invoke a function immediately,
// explicitly specifying the context (the value of this) in which the function execute
// along with this pass any argument as an array or array like object that the function expects.

//Basic structure of apply
//apply(contextOFTHIS,[])
//apply(contextOFTHIS,string)  string--> push X  reduce X but we can use length or str.[0]...--> read on your own array like object

//use cases of apply
//Function Borrowing
//Array Manipulation
const student = {
  name: "riana",
  roll: 21,
  calScore(s1, s2, s3) {
    console.log(
      `${this.name} Average score in 3 subjects : `,
      (s1 + s2 + s3) / 3
    );
  },
};

const student2 = {
  name: "ariana",
  roll: 22,
};
const arrayOfScores = [10, 20, 30];
student.calScore.apply(student2, arrayOfScores);
//in modern js we dont use apply as we have the spread operator ...
student.calScore.call(student2, ...arrayOfScores); //...arrayOfScores=10,20,30
