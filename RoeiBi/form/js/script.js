let studentsStr = []
window.onload = checkLocalStorage()

class saveStudent {
    constructor(fname, lname, email, sstatus) {
        this.fname = fname,
            this.lname = lname,
            this.email = email,
            this.sstatus = sstatus
    }
}

function checkLocalStorage() {
    if (window.localStorage.getItem("student")) {
        studentsStr = JSON.parse(localStorage.getItem("student"));
        console.log(studentsStr)
        for (i = 0; i < studentsStr.length; i++) {
            loopStudent = studentsStr[i]
            addToTable(loopStudent.fname, loopStudent.lname, loopStudent.email, loopStudent.sstatus)
        }
    }
    else {
        console.log("no students on local storage yet")
    }
}

function saveBtn() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    sstatus = document.getElementById("sstatus").value;
    if (window.localStorage.getItem("student")) {
        studentsStr = JSON.parse(localStorage.getItem("student"));
        for (i = 0; i < studentsStr.length; i++) {
            if (studentsStr[i].fname == fname){
                console.log("name already exists")
                return;
            }
            else continue;
        }
    }
    let student = new saveStudent(fname, lname, email, sstatus);
    studentsStr.push(student);
    window.localStorage.setItem("student", JSON.stringify(studentsStr));
    // console.log("student saved in local storage: " + window.localStorage.getItem("student"));
    addToTable(fname, lname, email, sstatus)
}

function addToTable(fname, lname, email, sstatus) {
    let table = document.getElementById("sTable");
    let newRow = table.insertRow();
    newRow.insertCell().innerHTML = fname
    newRow.insertCell().innerHTML = lname
    newRow.insertCell().innerHTML = email
    newRow.insertCell().innerHTML = sstatus
}

// No need for this function
// function getStudents() {
//     if (window.localStorage.getItem("student")) {
//         let studentsStr = JSON.parse(window.localStorage.getItem("student"));
//         console.log(studentsStr);
//         for (let i = 0; i < studentsStr.length; i++) {
//             console.log(studentsStr[i].index)
//             //innerHTML here
//         }
//     }
//     else console.log("no students registered");
// }

function clearStudents() {
    if (!window.localStorage.getItem("student")) {
        console.log("ls is empty");
    }
    else {
        let table = document.getElementById("sTable");
        let rowCount = table.rows.length
        console.log(rowCount)
        for (let i = rowCount; i > 1; i--) {
            table.deleteRow(i - 1);
            console.log("row: ", i);
        }
        window.localStorage.removeItem("student")
    }
}