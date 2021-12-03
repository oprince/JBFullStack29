function saveStudent() {
  let student = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    mail: document.getElementById("mail").value,
    msg: document.getElementById("msg").value,
    status: document.getElementById("status").value,
  };
  window.localStorage.setItem("student", JSON.stringify(student));
  alert(
    `The following studen details were saved successfully:\n ${JSON.stringify(
      student,
      undefined,
      2
    )}`
  );
  //GitHub
  //alert(`The following studen details were saved successfully:\n ${JSON.stringify(student)}`);
}

function getStudentFromLocalStorage() {
  let studentStr = window.localStorage.getItem("student");
  console.log(studentStr);
  let studentObj = JSON.parse(studentStr);
  document.getElementById("fname").value = studentObj.fname;
  document.getElementById("lname").value = studentObj.lname;
  document.getElementById("mail").value = studentObj.mail;
  document.getElementById("msg").value = studentObj.msg;
  document.getElementById("status").value = studentObj.status;
}

let myVar = setInterval(myTimer, 5000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = t;
}
