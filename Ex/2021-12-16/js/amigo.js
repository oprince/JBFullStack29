function calculatePackage(){
    if (validateInput()){
        let package = {
          minutes: parseInt(document.getElementById('minutes').value),
          giga: parseInt(document.getElementById('giga').value),
          sms: parseInt(document.getElementById('sms').value)
      }
      alert(`Going to calculate package for: \n${JSON.stringify(package, undefined, 2 )}`);
      return true;
    }else{
      return false;
    }
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

function validatePositiveNumer(elementId){
  let inputElement = document.getElementById(elementId);
  let inputNumber = parseInt(inputElement.value);
  if (inputNumber < 0){
    inputElement.classList.add("err");
    let error = document.getElementById("form_err");
    error.innerHTML = "יש להכניס רק מספרים חיוביים";
    return false;
  }
  return true;
}

function validateInput(){
  if (!validatePositiveNumer("minutes"))
    return false;
  if (!validatePositiveNumer("giga"))
    return false;
  if (!validatePositiveNumer("sms"))
    return false;
  return true;
}
function cleanEducationError(){
  document.getElementById("education").classList.remove("err");
  document.getElementById("education_err").innerHTML = "";  
}

function setSubmitButton(){
  let inputElements = document.querySelectorAll("input[required]");
  document.getElementById("submitForm").disabled = false;
  inputElements.forEach((inputElement) => {
    console.log("Checking value of " + inputElement.id)
    if (inputElement.value == "")
    {
      document.getElementById("submitForm").disabled = true;
    }
  });
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
    //document.getElementById('fname').style.setProperty("background", "#afc2e94d");
    //document.getElementById('fname').style.background = "#afc2e94d";
    
    document.getElementById("submitForm").disabled = true;
    let inputElements = document.querySelectorAll("input");
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("change", setSubmitButton);
    });
}
