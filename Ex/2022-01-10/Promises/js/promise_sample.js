let success = false;

function startPromise() {
  console.log("startPromise");
  let promise = new Promise((resolve, reject) => {
    success = !success;
    setTimeout(() => {
      if (success) {
        resolve("Promise Success!!!");
      } else {
        reject("Promise Fail!!!");
      }
    }, 1000);
  });
  promise
    .then((message) => {
      console.log("Promise.then");
      $("#myDiv").html(message);
      $("body").css("background-color", "green");
    })
    .catch((error) => {
      console.log("Promise.catch");
      $("#myDiv").html(error);
      $("body").css("background-color", "red");
    });
}
