//what is promises?
//Promises are objects in JavaScript used for asynchronous operations.
//They represent a value that might be available now, or in the future,
//or never. Promises have three states: pending, fulfilled, or rejected.
//When you create a new Promise, you provide it with an executor function
//which takes two arguments, resolve and reject. Inside this function,
//you perform your asynchronous operation. If the operation is successful,
//you call resolve with the result, and if it fails, you call reject with
//an error."

// How do you handle the result or error from a Promise?
function fetchData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = Math.random();
      if (data > 0.5) {
        resolve(data);
      } else {
        reject(new Error("Data is too low"));
      }
    }, 1000);
  });
}
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//How would you handle multiple asynchronous operations
// with Promises, ensuring that all operations complete
// successfully before proceeding

const fetchUrl = (url) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
      if (!url) reject(new Error("Invalid url"));
    }, Math.random() * 2000);
  });
};

const urls = ["url1", "url2", "url3"];

const promises = urls.map((url) => fetchData(url));
Promise.all(promises)
  .then((data) => console.log(data))
  .catch((e) => {
    console.log(e);
  });
