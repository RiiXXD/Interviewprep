//what is call method?
//It is a built-in function
//Available on function objects.

//why we use it ?
// It allows you to invoke a function immediately,
// explicitly specifying the context (the value of this) in which the function execute
// along with any arguments that the function expects.

// Use Cases:
// Method Borrowing: Invoking a method from one object with the context of another object.
// Function Currying: Pre-filling arguments of a function with specific values.
// Overriding this Context: Ensuring a specific context for a function,
// particularly useful in event handling or callback scenarios.

const bird = {
  name: "owl",
  additional: "big eyes",
  greet(msg, msg2) {
    console.log(`${msg},${this.name}!,${msg2}`);
  },
};
const bird2 = {
  name: "duck",
  additional: "Duckling follows you everywhere",
};

bird.greet("Hello", "You can see at night!");
bird.greet.call(bird2, "Hey", "You can walk and swim!"); //Hey,duck!,You can walk and swim!
//call(thisArg,rest will be the indiviidual argument)
