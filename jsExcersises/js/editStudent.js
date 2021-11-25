    let Editname = document.getElementById("Editname");
    let bday = document.getElementById("Editbday");
    let phone = document.getElementById("Editphone");
    let address = document.getElementById("Editaddress");
    let email = document.getElementById("Editemail");
    let gender = document.getElementById("Editgender");

    let id = window.localStorage.getItem("editId");
    let students = JSON.parse(window.localStorage.getItem("students"));
    
    for(student of students){
        if(student.id == id){
            Editname.value = student.name;
            bday.value = student.bday;
            phone.value = student.phone;
            address.value = student.address;
            email.value = student.email;
            gender.value = student.gender;
        }
    }

    document.getElementById("edit").addEventListener("click", ()=>{
        for(student of students){
            if(student.id == id)
            student.name = Editname.value;
            student.bday = bday.value;
            student.phone = phone.value;
            student.address = address.value;
            student.email = email.value;
            student.gender = gender.value;
            
        }
    });