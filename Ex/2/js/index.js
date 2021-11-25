const form = document.querySelector("form");
const educationField = document.getElementById("education");
const birthdayField = document.getElementById("birthday");
const requiredFields = Array.from(document.querySelectorAll("input[required]"));

document.addEventListener("DOMContentLoaded", initiateForm);

const getLS = () => JSON.parse(localStorage.getItem("student"));

function saveStudent() {
  let student = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    mail: document.getElementById("mail").value,
    education: document.getElementById("education").value + " years",
    birthday: document.getElementById("birthday").value,
    kids: document.getElementById("kids").value,
    msg: document.getElementById("msg").value,
  };
  window.localStorage.setItem("student", JSON.stringify(student));
  alert(
    `The following student details were saved successfully:\n ${JSON.stringify(
      student,
      undefined,
      2
    )}`
  );
}

function getStudentFromLocalStorage() {
  let studentStr = window.localStorage.getItem("student");
  if (studentStr != null) {
    console.log(studentStr);
    let studentObj = JSON.parse(studentStr);
    document.getElementById("fname").value = studentObj.fname;
    document.getElementById("lname").value = studentObj.lname;
    document.getElementById("mail").value = studentObj.mail;
    document.getElementById("education").value = studentObj.education;
    document.getElementById("birthday").value = studentObj.birthday;
    document.getElementById("msg").value = studentObj.msg;
    document.getElementById("kids").value = studentObj.kids;

    setTimeout(function () {
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("msg").value = "";
      document.getElementById("birthday").value = "";
      document.getElementById("education").value = "";
      document.getElementById("kids").value = "";
      window.localStorage.removeItem("student");
    }, 5000);
  }
}

function validateEducation() {
  let birthDate = new Date(birthdayField.value);
  var diff_ms = Date.now() - birthDate.getTime();
  var age_dt = new Date(diff_ms);

  let age = Math.abs(age_dt.getUTCFullYear() - 1970);
  return age - Number(educationField.value) > 5;
}

function setSubmitButton() {
  let isValid = true;
  requiredFields.forEach((requiredField) => {
    if (!requiredField.value.length) isValid = false;
  });
  document.getElementById("submit-btn").disabled = !isValid;
}

function initiateForm() {
  //Limit maximum birth date to be 18 years ago
  var today = new Date();
  birthdayField.setAttribute("max", minMaxDate(today, 18));
  birthdayField.setAttribute("min", minMaxDate(today, 90));

  document.getElementById("submit-btn").disabled = true;
  let inputElements = document.querySelectorAll("input");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("change", setSubmitButton);
  });

  setLocalStorageBtn();
}

function setLocalStorageBtn() {
  document.getElementById("ls-btn").disabled = getLS() ? false : true;
}

const unixYears = (years) => {
  return years * 365 * 24 * 60 * 60 * 1000;
};

const minMaxDate = (date, years) => {
  return new Date(date - unixYears(years)).toISOString().slice(0, -14);
};

const errorMsg = (msg) => {
  document.getElementById("error-message").innerHTML = `
        <p style="color: red;">
         <strong>
            ${msg}
         </strong>
        </p>
    `;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEducation()) {
    educationField.style.background = "#ff00001f";
    errorMsg(`חינוך פורמלי מתחיל מגיל 5`);
  } else {
    educationField.style.background = "unset";
    document.getElementById("error-message").innerHTML = ``;
    setTimeout(() => saveStudent(), 300);
  }
});
