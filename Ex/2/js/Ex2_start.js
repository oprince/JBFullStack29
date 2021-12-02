function saveStudent(){
      let student = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        mail: document.getElementById('mail').value,
        msg: document.getElementById('msg').value
    }
    window.localStorage.setItem("student",JSON.stringify(student)); 
    alert(`The following studen details were saved successfully:\n ${JSON.stringify(student, undefined, 2 )}`);
}

function getStudentFromLocalStorage(){
  let studentStr = window.localStorage.getItem("student");
  if (studentStr != null){
    console.log(studentStr);
    let studentObj = JSON.parse(studentStr);
    document.getElementById('fname').value = studentObj.fname;
    document.getElementById('lname').value = studentObj.lname;
    document.getElementById('mail').value = studentObj.mail;
    document.getElementById('msg').value = studentObj.msg;
    
    setTimeout(function(){ 
      document.getElementById('fname').value = "";
      document.getElementById('lname').value = "";
      document.getElementById('mail').value = "";
      document.getElementById('msg').value = "";  
      window.localStorage.removeItem("student");
    }, 5000);
    
  }

}

function validateEducation(){
  let birthDate = new Date(document.getElementById('birthDate').value);
  // diff_ms = now (in ms since 1970) - birthday (in ms since 1970)
  // diff_ms = age in ms  
  var diff_ms = Date.now() - birthDate.getTime();
  var age_dt = new Date(diff_ms); 

  let age = Math.abs(age_dt.getUTCFullYear() - 1970);
  console.log("age = " + age);
}

function initiateForm(){
    //Limit maximum birth date to be 18 years ago
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear() - 18;

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    } 
      
    maxBirthDate = yyyy + '-' + mm + '-' + dd;
    console.log("Maximum birth date is: " + maxBirthDate); 

    //document.getElementById('fname').setAttribute("class","empty");
    //document.getElementById('fname').classList.add("empty");
    //document.getElementById('fname').style.setProperty("background", "#b1395f");
    //document.getElementById('fname').style.background = "#afc2e94d";
}
