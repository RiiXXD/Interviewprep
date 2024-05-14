// Function overshadowing occurs in JavaScript when a function with the
//  same name as another function is declared within a nested scope,
//  causing the outer function to be overshadowed or hidden within that scope.
function greet() {
  console.log("Hello from outer function");
}

function outer() {
  function greet() {
    console.log("Hello from inner function");
  }

  greet(); // Invoking greet() from the inner function
}

outer(); // This will output: "Hello from inner function"
greet(); // Invoking greet() from the outer function
