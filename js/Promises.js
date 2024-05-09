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

//   How would you handle multiple asynchronous operations with Promises, ensuring that all operations complete successfully before proceeding

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
