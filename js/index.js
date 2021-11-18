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
const table = document.createElement("table");
const tr = document.createElement("tr");
const name = document.createElement("td");
const address = document.createElement("td");
const phone = document.createElement("td");
const bday = document.createElement("td");
const email = document.createElement("td");
const gender = document.createElement("td");
const node;

document.appendChild(div);

node = students.name;
name.appendChild(node);

node = students.address;
address.appendChild(node);

node = students.phone;
phone.appendChild(node);

node = students.bday;
bday.appendChild(node);

node = students.email;
email.appendChild(node);

node = students.gender;
gender.appendChild(node);


div.appendChild(table);
students.forEach(()=>{
table.appendChild(tr);

tr.appendChild(name);
tr.appendChild(address);
tr.appendChild(phone);
tr.appendChild(bday);
tr.appendChild(email);
tr.appendChild(gender);

});

}

document.getElementById("send").addEventListener("click", ()=>{
  const name = document.getElementById("name").value;
  const bday = document.getElementById("bday").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  const newStudent = new Student(name, bday, phone, address, email, gender);
  students.push(newStudent);

  window.localStorage.setItem("students", JSON.stringify(students));
});


