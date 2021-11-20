class Student{
  constructor(name, phone, address, bday, email, gender){
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.bday = bday;
      this.email = email;
      this.gender = gender;
  }
id = 0;
setId(id){
this.id = id;
}
}

let students = [];
let id = 0;

students = JSON.parse(localStorage.getItem("students");

//Putting the list of students in a table
const div = document.createElement("div");
const table = document.createElement("table");
const thead = document.createElement("thead");
const th = document.createElement("th");
const tr = document.createElement("tr");
const td = document.createElement("td");
const node;

const editBtn = document.createElement("btn");
editBtn.className = "editBtn";

document.appendChild(div);
div.appendChild(table);
table.appendChild(thead);

//adding th titles to the table
for(obj in students[0]){
node = obj;
th.appendChild(node);
thead.appendChild(th);
}

//getting each student in a row and each info in a td
students.forEach((student)=>{

for(obj in student){
node = student.obj;
td.appendChild(node);
tr.appendChild(td);
}
editBtn.id = student.id;
td.appendChild(editBtn)
tr.appendChild(td);

table.appendChild(tr);

});

//creating new student object after sending the form and adding to the local storage
document.getElementById("send").addEventListener("click", ()=>{
  const name = document.getElementById("name").value;
  const bday = document.getElementById("bday").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  const newStudent = new Student(name, bday, phone, address, email, gender);
  students.setId(id);
  id++;
  students.push(newStudent);

  window.localStorage.setItem("students", JSON.stringify(students));
});


