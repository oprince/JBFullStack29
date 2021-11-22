    let name = document.getElementById("Editname");
    let bday = document.getElementById("Editbday");
    let phone = document.getElementById("Editphone");
    let address = document.getElementById("Editaddress");
    let email = document.getElementById("Editemail");
    let gender = document.getElementById("Editgender");

    let id = window.localStorage("editId");
    let students = JSON.parse(window.localStorage.getItem("students"));

    let studentEdit;

    for(student of students){
        if(student.id == id){
            studentEdit = student;
        }
    }