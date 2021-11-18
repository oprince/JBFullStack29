class Student{
  constructor(name, phone, address, bday, email, gender){
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.bday = bday;
      this.email = email;
      this.gender = gender;
  }
}
let students = [];

if(window.localStorage.getItem("students")){
students = window.localStorage.getItem(JSON.parse("students"))
}

window.onload(loadStudents);

const loadStudents = () =>{
const div = document.createElement("div");
const name = document.createElement("p");
const age = document.createElement("p");
const phone = document.createElement("p");
const node;

document.appendChild(div);

node = students.name;
name.appendChild(node);

node = students.age;
age.appendChild(node);

node = students.phone;
phone.appendChild(node);

div.appendChild(name);
div.appendChild(age);
div.appendChild(phone);

}

document.getElementById("send").addEventListener("click", ()=>{
  const name = document.getElementById("name").value;
  const bday = document.getElementById("bday").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  newStudent = new Student(name, bday, phone, address, email, gender);
  students.push(newStudent);

  window.localStorage.setItem("students", JSON.stringify(students));
});


