const allInputs = Array.from(document.querySelectorAll(".input"));
const form = document.querySelector("form");
const table = document.querySelector(".student-table");

let formData = {};
let students = [];
let id = 1;

document.addEventListener("DOMContentLoaded", () => {
  if (getLocalStorage()) {
    students = getLocalStorage();
    drawTable(students);
  }
});

const setLocalStorage = (value) =>
  localStorage.setItem("students", JSON.stringify(value));

const getLocalStorage = () => JSON.parse(localStorage.getItem("students"));

const updateForm = (e) => {
  formData = {
    ...formData,
    [e.target.name]: e.target.value,
  };
};

allInputs.forEach((input) => {
  input.addEventListener("input", updateForm);
});

const addStudent = (e) => {
  e.preventDefault();
  const newStudent = { id: id++, ...formData };
  students.push(newStudent);
  setLocalStorage(students);
  drawTable(students);
};

form.addEventListener("submit", addStudent);

const drawTable = (students) => {
  let tableBody = "";
  tableBody = `
        <tr>
          <th>Name</th>
          <th>Birth Date</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      `;
  students.forEach((student) => {
    tableBody += `
        <tr>
          <td>${student.name}</td>
          <td>${student.bday}</td>
          <td>${student.phone}</td>
          <td>${student.address}</td>
          <td>${student.email}</td>
          <td>${student.gender}</td>
        </tr>
    `;
  });
  table.innerHTML = tableBody;
};

drawTable(students);
