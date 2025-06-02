const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then(value => console.log(value))
  .catch(error => console.log(error));

rejectedPromise
  .then(value => console.log(value))
  .catch(error => console.log(error));
