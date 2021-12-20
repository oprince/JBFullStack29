A = { giga: 60, minutes: 2000, sms: 200 };

B = { giga: 30, minutes: 2400, sms: 350 };

C = { giga: 45, minutes: 1800, sms: 800 };

const bestPA = [A, B, C];

console.log(bestPA[0]);
const packages = {
  packageA: {
    giga: 60,
    minutes: 2000,
    sms: 200,
  },
  packageB: {
    giga: 30,
    minutes: 2400,
    sms: 350,
  },
  packageC: {
    giga: 45,
    minutes: 1800,
    sms: 800,
  },
};
const deviationCost = {
  giga: 20,
  minutes: 0.5,
  sms: 0.35,
};

function getDeviation(packageId, usage) {
  let deviation = 0;
  let gigaDeviation = usage.giga - packages[packageId].giga;
  if (gigaDeviation > 0) {
    deviation += gigaDeviation * deviationCost.giga;
  }
  let minuteDeviation = usage.minutes - packages[packageId].minutes;
  if (minuteDeviation > 0) {
    deviation += minuteDeviation * deviationCost.minutes;
  }
  let smsDeviation = usage.sms - packages[packageId].sms;
  if (smsDeviation > 0) {
    deviation += smsDeviation * deviationCost.sms;
  }

  if (deviation <= 0) {
    let gigaIm = ((60 - usage.giga) * 100) / 60;
    let minutesIm = ((2400 - usage.minutes) * 100) / 2400;
    let smsIm = ((800 - usage.sms) * 100) / 800;

    if (
      (gigaIm < minutesIm && minutesIm < smsIm) ||
      (gigaIm < smsIm && smsIm < minutesIm)
    ) {
      alert("A is the best for you");
    }

    if (
      (minutesIm < gigaIm && gigaIm < smsIm) ||
      (minutesIm < smsIm && smsIm < gigaIm)
    ) {
      alert("B is the best for you");
    }

    if (
      (smsIm < minutesIm && minutesIm < gigaIm) ||
      (smsIm < gigaIm && gigaIm < minutesIm)
    ) {
      alert("C is the best for you");
    }
  }

  return deviation;
}

function calculatePackage() {
  if (validateInput()) {
    let usage = {
      minutes: parseInt(document.getElementById("minutes").value),
      giga: parseInt(document.getElementById("giga").value),
      sms: parseInt(document.getElementById("sms").value),
    };
    console.log(
      `Going to calculate best package for: \n${JSON.stringify(
        usage,
        undefined,
        2
      )}`
    );
    let selectedPackageId = "";
    let selectedDeviation = -1;
    for (let packageId in packages) {
      let deviation = getDeviation(packageId, usage);
      console.log("deviation for " + packageId + ": " + deviation);
      if (selectedDeviation < 0 || selectedDeviation > deviation) {
        selectedDeviation = deviation;
        selectedPackageId = packageId;
      }
    }
    console.log(
      "selectedPackageId " +
        selectedPackageId +
        ", selectedDeviation: " +
        selectedDeviation
    );
    for (let packageId in packages) {
      let packageDiv = document.getElementById(packageId);
      if (packageId == selectedPackageId) {
        packageDiv.classList.add("greenPackage");
      } else {
        packageDiv.classList.add("redPackage");
      }
    }
    return true;
  } else {
    return false;
  }
}

function validatePositiveNumer(elementId) {
  let inputElement = document.getElementById(elementId);
  let inputNumber = parseInt(inputElement.value);
  if (inputNumber < 0) {
    inputElement.classList.add("err");
    let error = document.getElementById("form_err");
    error.innerHTML = "יש להכניס רק מספרים חיוביים";
    return false;
  }
  return true;
}

function validateInput() {
  if (!validatePositiveNumer("minutes")) return false;
  if (!validatePositiveNumer("giga")) return false;
  if (!validatePositiveNumer("sms")) return false;
  return true;
}

function cleanEducationError() {
  document.getElementById("education").classList.remove("err");
  document.getElementById("education_err").innerHTML = "";
}

function setSubmitButton() {
  let inputElements = document.querySelectorAll("input[required]");
  document.getElementById("submitForm").disabled = false;
  inputElements.forEach((inputElement) => {
    console.log("Checking value of " + inputElement.id);
    if (inputElement.value == "") {
      document.getElementById("submitForm").disabled = true;
    }
  });
}

function initiateForm() {
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    calculatePackage();
  });
  //document.getElementById("submitForm").disabled = true;
  let inputElements = document.querySelectorAll("input");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("change", (e) => {
      //clean error presentation
      if (e.target.classList.contains("err")) {
        e.target.classList.remove("err");
        let error = document.getElementById("form_err");
        error.innerHTML = "";
      }
      setSubmitButton();
    });
  });
}

/*if (deviation <= 0) {
    let minSumA = bestPA[0].minutes - usage.minutes;
    let smsSumA = bestPA[0].sms - usage.sms;
    let gigaSumA = bestPA[0].giga - usage.giga;

    let minSumB = bestPA[1].minutes - usage.minutes;
    let smsSumB = bestPA[1].sms - usage.sms;
    let gigaSumB = bestPA[1].giga - usage.giga;

    let minSumC = bestPA[2].minutes - usage.minutes;
    let smsSumC = bestPA[2].sms - usage.sms;
    let gigaSumC = bestPA[2].giga - usage.giga;

    if (
      (minSumA > minSumB && minSumB > minSumC) ||
      (minSumA > minSumC && minSumC > minSumB)
    ) {
      alert("A is the best for minutes");
    }
    if (
      (minSumB > minSumA && minSumA > minSumC) ||
      (minSumB > minSumC && minSumC > minSumA)
    ) {
      alert("B is the best for minutes");
    }
    if (
      (minSumC > minSumB && minSumB > minSumA) ||
      (minSumC > minSumA && minSumA > minSumB)
    ) {
      alert("c is the best for minutes");
    }

    if (smsSumA >= 0 && smsSumB >= 0 && smsSumC >= 0) {
      if (
        (smsSumA < smsSumB && smsSumB < smsSumC) ||
        (smsSumA < smsSumC && smsSumC < smsSumB)
      ) {
        alert("A is the best for sms");
      }
    }
    if (smsSumA >= 0 && smsSumB >= 0 && smsSumC >= 0) {
      if (
        (smsSumB < smsSumA && smsSumA < smsSumC) ||
        (smsSumB < smsSumC && smsSumC < smsSumA)
      ) {
        alert("B is the best for sms");
      }
    }
    if (smsSumA > 0 && smsSumB > 0 && smsSumC > 0) {
      if (
        (smsSumC < smsSumB && smsSumB < smsSumA) ||
        (smsSumC > smsSumA && smsSumA < smsSumB)
      ) {
        alert("c is the best for sms");
      }
    }

    if (
      (gigaSumA > gigaSumB && gigaSumB > gigaSumC) ||
      (gigaSumA > gigaSumC && gigaSumC > gigaSumB)
    ) {
      alert("A is the best for giga");
    }
    if (
      (gigaSumB > gigaSumA && gigaSumA > gigaSumC) ||
      (gigaSumB > gigaSumC && gigaSumC > gigaSumA)
    ) {
      alert("B is the best for giga");
    }
    if (
      (gigaSumC > gigaSumB && gigaSumB > gigaSumA) ||
      (gigaSumC > gigaSumA && gigaSumA > gigaSumB)
    ) {
      alert("c is the best for giga");
    }
*/

//כשאין חריגה יש רק חבילה אחת מתאימה
