
const packets={
    "packetA":{
        place:60
        munite:2000
        sms: 200
        }
    
    "packetB":{
        place:30
        munite:2400
        sms: 350
        }

     "packetC":{
        place:45
        munite:1800
        sms: 800
        }
    
}
function calculatpacket(){
      let used = {
        munite: document.getElementById('munite').value,
        place: document.getElementById('place').value,
        sms: document.getElementById('sms').value     
    }
// test if have zero or negativ number 
    if (used.munite <= 0) {
        return false ;  
     }
    if (used.place <= 0) {
        return false;
    }
    if (used.sms <= 0) {
        return false;
    }
// call to packettest function 
    packettest(used);


    alert(`The following packet details were saved successfully:\n ${JSON.stringify(used, undefined, 2 )}`);
}
function packettest(used){
 // test place value
    if (packets["packetC"].place>used.place>packets["packetB"].place ) {return  "packetC"}
    if (used.place<packets["packetB"].place){ return "packetB"}
    if (used.place>packets["packetC"].place){return "packetC"}
 // test munite value
    if (2000>used.munite>1800) {return  A}
    if (used.munite<1800){ return C}
    if (used.munite>2000){return B}
// test sms value
    if (350>used.sms>200) {return  B}
    if (used.sms<200){ return A}
    if (used.sms>350){return C}
}
// function getStudentFromLocalStorage(){
//   let studentStr = window.localStorage.getItem("student");
//   if (studentStr != null){
//     console.log(studentStr);
//     let studentObj = JSON.parse(studentStr);
//     document.getElementById('fname').value = studentObj.fname;
//     document.getElementById('lname').value = studentObj.lname;
//     document.getElementById('mail').value = studentObj.mail;
//     document.getElementById('msg').value = studentObj.msg;
    
//     setTimeout(function(){ 
//       document.getElementById('fname').value = "";
//       document.getElementById('lname').value = "";
//       document.getElementById('mail').value = "";
//       document.getElementById('msg').value = "";  
//       window.localStorage.removeItem("student");
//     }, 10000);
    
//   }

// }

// function validateEducation(){
//   let birthDate = new Date(document.getElementById('birthDate').value);
//   console.log("birthDate.getUTCFullYear() = " + birthDate.getUTCFullYear());
//   // diff = now (in ms since 1970) - birthday (in ms since 1970)
//   // diff = age in ms  
//   console.log("Date.now().getUTCFullYear() = " + new Date(Date.now()).getUTCFullYear());
//   let diff_ms = Date.now() - birthDate.getTime();
//   let age_dt = new Date(diff_ms); 
//   console.log("age_dt.getUTCFullYear() = " + age_dt.getUTCFullYear());

//   let age = Math.abs(age_dt.getUTCFullYear() - 1970);
//   console.log("age = " + age);

//   let education = parseInt(document.getElementById('education').value);
//   console.log("education = " + education);
//   let field = document.getElementById("education");
//   let error = document.getElementById("ceducation");
//   if (education + 5 < age){
//     field.classList.remove("err");
//     error.innerHTML = "";    
//   }else{
//     field.classList.add("err");
//     error.innerHTML = "חינוך פורמלי מתחיל מגיל 5";
//   }
// }
// function cleanError(){
//     let field = document.getElementById("education");
//     let error = document.getElementById("ceducation");
//     field.classList.remove("err");
//     error.innerHTML = "";    
// }

// function initiateForm(){
//     //Limit maximum birth date to be 18 years ago
//     let today = new Date();
//     let dd = today.getDate();
//     let mm = today.getMonth() + 1; //January is 0!
//     let yyyy = today.getFullYear() - 18;
//     let minYear = today.getFullYear() - 90;
//     if (dd < 10) {
//       dd = '0' + dd;
//     }

//     if (mm < 10) {
//       mm = '0' + mm;
//     } 
      
//     maxBirthDate = yyyy + '-' + mm + '-' + dd;
//     minBirthDate = minYear + '-' + mm + '-' + dd;
   
// }
