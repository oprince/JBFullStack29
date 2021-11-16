const form = document.querySelector("form");
const statusVal = document.getElementById("status");
const dateTime = document.getElementById("date-n-time");

let selected = "";

const getLS = (key) => JSON.parse(localStorage.getItem(key));
const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

function getUserStatus() {
  selected = statusVal.options[statusVal.selectedIndex].text;
  return selected;
}

function displayDate() {
  let date = new Date();
  dateTime.innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

// initializing the date first, then we can create setInterval to update the date and time
displayDate();

// Setting the date and time to update every second
setInterval(() => {
  displayDate();
}, 1000);

function saveStudent() {
  let student = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    mail: document.getElementById("mail").value,
    msg: document.getElementById("msg").value,
    status: selected,
  };
  saveLS("student", student);
  alert(
    `The following student details were saved successfully:\n ${JSON.stringify(
      student,
      undefined,
      2
    )}`
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveStudent();
  form.reset();
});

function getStudentFromLocalStorage() {
  let studentObj = getLS("student");
  if (studentObj) {
    document.getElementById("fname").value = studentObj.fname;
    document.getElementById("lname").value = studentObj.lname;
    document.getElementById("mail").value = studentObj.mail;
    document.getElementById("msg").value = studentObj.msg;
    statusVal.options[statusVal.selectedIndex].text = studentObj.status;
  } else {
    console.log("No student found in local storage");
  }
}
