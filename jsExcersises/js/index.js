class Student {
  
  constructor(name, phone, bday, address, email, gender) {
    this.name = name;
    this.phone = phone;
    this.bday = bday;
    this.address = address;
    this.email = email;
    this.gender = gender;
  }
  
  id = 0;
  
  setId(id) {
    this.id = id;
  }
  
  getId() {
    return this.id;
  }
}

let students = [];


if (JSON.parse(localStorage.getItem("students")))
  students = JSON.parse(localStorage.getItem("students"));


//Putting the list of students in a table
if (students.length > 0) {

  onload(()=>{
    const div = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    let th;
    let tr;
    let td;
    let node;
    let editBtn;
    let deleteBtn;
  
    table.appendChild(thead);
    //adding th titles to the table
    for (obj in students[0]) {
      node = document.createTextNode(obj);
      th = document.createElement("th");
      th.appendChild(node);
      thead.appendChild(th);
    }
  
    table.appendChild(thead);
  
    //getting each student in a row and each info in a td
    students.forEach((student) => {
      tr = document.createElement("tr");
  
      for (obj in student) {
  
        node = document.createTextNode(student[obj]);
        console.log(student[obj]);
        td = document.createElement("td");
        td.appendChild(node);
        tr.appendChild(td);
      }
  
      //Edit Button creation, adding a class and changing button text
      editBtn = document.createElement("button");
      editBtn.className = "editBtn";
      editBtn.id = student.id;
      editBtn.innerHTML = "Edit";
      td = document.createElement("td");
      td.appendChild(editBtn);
      tr.appendChild(td);
  
      deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.id = student.id;
      deleteBtn.innerHTML = "Delete";
      td = document.createElement("td");
      td.appendChild(deleteBtn);
      tr.appendChild(td);
  
  
      table.appendChild(tr);
  
    });
    div.appendChild(table);
    document.body.appendChild(div);
  
  
  } 
  );
}
  

//creating new student object after sending the form and adding to the local storage
document.getElementById("send").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const bday = document.getElementById("bday").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  let newStudent = new Student(name, bday, phone, address, email, gender);

  let id = 0;
  if (students.length != 0)
    id = students[students.length - 1].id + 1;

  newStudent.setId(id);
  students.push(newStudent);

  window.localStorage.setItem("students", JSON.stringify(students));
  location.reload();

});

//Adding Edit Buttons event listeners
for (let i = 0; i < students.length; i++) {
  document.getElementsByClassName("editBtn")[i].addEventListener("click", (e) => {
    window.localStorage.setItem("editId", e.target.id);
    location.href = 'editStudent.html';
  });
}


//Adding Delete Buttons event listeners
for (let i = 0; i < students.length; i++) {
  document.getElementsByClassName("deleteBtn")[i].addEventListener("click", (e) => {
    if (students[i].id == e.target.id) {
      students.splice(i, 1);
      window.localStorage.setItem("students", JSON.stringify(students));
      location.reload()
    }
  })
}