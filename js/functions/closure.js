// What are closures in JavaScript?
//ans Closure is created whenever the inner function has
//the access to the outer function scope even when outer function is returned.

//why we use closure?
// Data encapsulation and date persistance

//Basic structure of closure
// outer(p1){
// inner(p2){
//     console.log(p1,p2)
// }
// return inner;
// }
// const closure=outer(p1);
// closure(p2);

// Can you provide an example of how they can be used in a practical scenario?
function bank(intialAmt) {
  let bal = intialAmt;
  console.log("Intial Balance ->", bal);

  function deposit(amt) {
    bal += amt;
    console.log("Balance ->", bal, " amount deposited-> ", amt);
  }
  function withdraw(amt) {
    bal -= amt;
    console.log("Balance ->", bal, " amount withdrawed-> ", amt);
  }
  return { deposit, withdraw };
}

const closureExample = bank(100);
closureExample.deposit(2);
closureExample.withdraw(100);
