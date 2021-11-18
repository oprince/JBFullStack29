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