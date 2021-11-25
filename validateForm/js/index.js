
function saveStudent(){
  if(initiateForm() && validateEducation())
  document.getElementById("submit").disabled = "false";
    let student = {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      mail: document.getElementById('mail').value,
      msg: document.getElementById('msg').value
  }
 
}


function validateEducation(){
let birthDate = new Date(document.getElementById('birthDate').value);
let education = document.getElementById("education").value;
// diff_ms = now (in ms since 1970) - birthday (in ms since 1970)
// diff_ms = age in ms  
console.log(birthDate);
var diff_ms = Date.now() - birthDate.getTime();
var age_dt = new Date(diff_ms); 

let age = Math.abs(age_dt.getUTCFullYear() - 1970);
if(education < age - 5){
    document.getElementById("education").classList.add("validateError");
    document.getElementById("educationError").innerHTML = "חינוך פורמאלי מתחיל מגיל 5";
    return false;
}
else{
    document.getElementById("education").classList.remove("validateError");
    document.getElementById("educationError").innerHTML = "";
    return true;
}
console.log("age = " + age);
}

function initiateForm(){
  //Limit maximum birth date to be 18 years ago
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var maxyyyy = today.getFullYear() - 18;
  var minyyyy = today.getFullYear() - 90;

  console.log(maxyyyy);
  console.log(minyyyy);

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  } 
   


  //document.getElementById('fname').setAttribute("class","empty");
  //document.getElementById('fname').classList.add("empty");
  //document.getElementById('fname').style.setProperty("background", "#b1395f");
  //document.getElementById('fname').style.background = "#afc2e94d";
}