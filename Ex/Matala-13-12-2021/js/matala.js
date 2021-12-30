const form = document.querySelector("form");
const gigaEl = document.getElementById("giga");
const minutesEl = document.getElementById("minutes");
const smsEl = document.getElementById("sms");
const clearFormEl = document.getElementById("cleanForm");

const packages = {
  package1: {
    giga: 60,
    minutes: 2000,
    sms: 200,
  },
  package2: {
    giga: 30,
    calls: 2400,
    sms: 350,
  },
  package3: {
    giga: 45,
    calls: 1800,
    sms: 800,
  },
};

const notRecommendedPackages = (key) => {
  return Object.keys(packages).filter((pkg) => pkg !== key);
};

const getAllPackagesElements = () => {
  return Object.keys(packages).map((pkg) => document.querySelector(`.${pkg}`));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  findSuitedPackage();
});

const findSuitedPackage = () => {
  const giga = Number(gigaEl.value);
  const minutes = Number(minutesEl.value);
  const sms = Number(smsEl.value);
  if (giga > 0 && minutes > 0 && sms > 0) {
    const packageId = Object.keys(packages).find(
      (key) =>
        packages[key].giga >= giga &&
        packages[key].minutes >= minutes &&
        packages[key].sms >= sms
    );
    colorPackages(packageId);
    clearFormEl.disabled = false;
  } else {
    alert("לא ניתן להזין מספרים שלילים או 0");
  }
};

clearFormEl.addEventListener("click", () => {
  form.reset();
  clearFormEl.disabled = true;
  getAllPackagesElements().forEach((el) => {
    el.style.backgroundColor = "lightgray";
  });
});

const colorPackages = (packageId) => {
  if (packageId) {
    const packageEl = document.querySelector(`.${packageId}`);
    packageEl.style.backgroundColor = "green";
    notRecommendedPackages(packageId).forEach((pkg) => {
      document.querySelector(`.${pkg}`).style.backgroundColor = "red";
    });
  } else {
    getAllPackagesElements().forEach((el) => {
      el.style.backgroundColor = "red";
    });
  }
};
