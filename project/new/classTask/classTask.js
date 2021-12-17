let packages = [];

let theChoise = {
  minutes: "",
  sms: "",
  giga: "",
};

let theException= {

  minutes= "",
  giga = "",
  sms= "",
  
  
  };
  
  

  
function readData() {
  let minutes = document.getElementById("mints").value;
  let sms = document.getElementById("sms").value;
  let giga = document.getElementById("giga").value;

  theChoise = {
    minutes,
    sms,
    giga,
  };

  packages.push({ ...theChoise });
  localStorage.setItem("packages", JSON.stringify(packages));
}

function calculate() {
  readData();

  document.getElementById("clearBtn").disabled = false;

  for (let i = 0; i < packages.length; i++) {
    if (
      theChoise.minutes > 1800 &&
      theChoise.minutes < 2400 &&
      theChoise.giga > 45 &&
      0 < theChoise.sms < 350
    ) {
      document.getElementById("package1").style.backgroundColor = "green";
      document.getElementById("package2").style.backgroundColor = "red";
      document.getElementById("package3").style.backgroundColor = "red";
    }
    if (theChoise.giga > 60) {
      let sum = (theChoise.giga - 60) * 20;
      alert("you will need to pay " + sum + " NIS more for Giga");

      return;
    } else if (
      theChoise.minutes >= 2000 &&
      theChoise.sms >= 200 &&
      theChoise.giga < 45
    ) {
      document.getElementById("package1").style.backgroundColor = "red";
      document.getElementById("package2").style.backgroundColor = "green";
      document.getElementById("package3").style.backgroundColor = "red";

      if (theChoise.minutes > 2400) {
        let sum = (theChoise.minutes - 2400) * 0.5;
        alert("you will need to pay " + sum + " NIS more for minutes");
      }

      if (theChoise.sms > 800) {
        let sum = (theChoise.sms - 800) * 0.3;
        alert("you will need to pay " + sum + " NIS more for SMS");
        return;
      }
    } else if (
      theChoise.minutes < 1800 &&
      theChoise.sms > 350 &&
      theChoise.giga < 60 &&
      theChoise.giga > 30
    ) {
      document.getElementById("package1").style.backgroundColor = "red";
      document.getElementById("package2").style.backgroundColor = "red";
      document.getElementById("package3").style.backgroundColor = "green";

      if (theChoise.sms > 800) {
        let sum = (theChoise.sms - 800) * 0.3;
        alert("you will need to pay " + sum + " NIS more for SMS");
      }
      if (theChoise.giga > 60) {
        let sum = (theChoise.giga - 60) * 20;
        alert("you will need to pay " + sum + " NIS more for Giga");
        return;
      }
    } else {
      alert("we dont have offer for those requests");
      resetForm();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    packages = JSON.parse(window.localStorage.getItem("packages"));
  });
}

function resetForm() {
  document.querySelector("form").reset();
  document.getElementById("clearBtn").disabled = true;

  document.getElementById("package1").style.backgroundColor = "gray";
  document.getElementById("package2").style.backgroundColor = "gray";
  document.getElementById("package3").style.backgroundColor = "gray";
}

function inputCheck() {
  let m = document.getElementById("mints").value;
  let s = document.getElementById("sms").value;
  let g = document.getElementById("giga").value;
  if (m < 0) {
    alert("enter only positive numbers!");
    resetForm();
  } else if (s < 0) {
    alert("enter only positive numbers!");
    resetForm();
  } else if (g < 0) {
    alert("enter only positive numbers!");
    resetForm();
  }
}






