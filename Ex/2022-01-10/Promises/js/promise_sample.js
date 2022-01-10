let success = false;

function startPromise() {
  console.log("startPromise");
  let promise = new Promise((resolve, reject) => {
    success = !success; // toggling a boolean value
    setTimeout(() => {
      if (success) { // checking if success then resolve else reject the promise
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
      $("body").css({ "background-color": "green", color: "white" });
    })
    .catch((error) => {
      console.log("Promise.catch");
      $("#myDiv").html(error);
      $("body").css({ "background-color": "red", color: "white" });
    });
}
