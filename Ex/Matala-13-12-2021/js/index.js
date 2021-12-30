const callsEl = document.getElementById("minutes");
const gigaEl = document.getElementById("giga");
const smsEl = document.getElementById("sms");
const formEl = document.querySelector("form");
const timerEl = document.getElementById("timer");
const clearBtn = document.querySelector(".clear");
const alertEl = document.querySelector(".error");
const accordion = document.getElementById("accordionFlushExample");

let canReset = false;

let packages = [
  {
    id: 1,
    giga: 60,
    calls: 2000,
    sms: 200,
  },
  {
    id: 2,
    giga: 30,
    calls: 2400,
    sms: 350,
  },
  {
    id: 3,
    giga: 45,
    calls: 1800,
    sms: 800,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  timerEl.style.display = "none";
  clearBtn.disabled = !canReset;
});

const dropErrorMessage = (msg) => {
  alertEl.innerHTML = `
    <div class="alert alert-danger" role="alert">
    <span>
        ${msg}
    </span>
    </div>
  `;
  setTimeout(() => {
    alertEl.innerHTML = "";
  }, 5000);
};

const notRecommendedPackages = (pkg_Id) => {
  return packages.filter((package) => package.id !== pkg_Id);
};

const getAllPackagesId = () => {
  return packages.map((package) => package.id);
};

const getTheRightPackage = () => {
  const giga = gigaEl.value;
  const calls = callsEl.value;
  const sms = smsEl.value;

  let theRightPackage = packages.find((package) => {
    return package.giga >= giga && package.calls >= calls && package.sms >= sms;
  });

  if (!theRightPackage) {
    theRightPackage = {
      id: packages.length + 1,
      giga,
      calls,
      sms,
    };
    drawCustomPackage(giga, calls, sms);
  }

  setPackageResult(theRightPackage.id);

  canReset = true;
  clearBtn.disabled = !canReset;

  return theRightPackage;
};

const drawCustomPackage = (giga, calls, sms) => {
  const gigaCost = giga * 20;
  const callsCost = calls * 0.5;
  const smsCost = sms * 0.35;

  const totalCost = ((gigaCost + callsCost + smsCost) / 50).toFixed(0);

  accordion.innerHTML += `
          <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
          <button
            id="package-4"
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
            disabled="true"
          >
            חבילה מותאמת אישית
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul>
              <li>
                <span>נפח גלישה:</span>
                <span id="giga-package-4">${giga} GB</span>
              </li>
              <li>
                <span>דקות:</span>
                <span id="minutes-package-4">${calls}</span>
              </li>
              <li>
                <span>הודעות:</span>
                <span id="sms-package-4">${sms}</span>
              </li>
              <li>עלות חודשית של ${totalCost} ש"ח</li>
            </ul>
          </div>
        </div>
      </div>
  `;
};

const setPackageResult = (id) => {
  const element = document.getElementById("package-" + id);
  element.disabled = false;
  element.style.backgroundColor = "lightgreen";

  notRecommendedPackages(id).forEach((package) => {
    const element = document.getElementById("package-" + package.id);
    element.style.backgroundColor = "red";
  });
};

const resetForm = () => {
  formEl.reset();
  for (let i = 0; i < getAllPackagesId().length; i++) {
    const element = document.getElementById("package-" + getAllPackagesId()[i]);
    element.style.backgroundColor = "lightgray";
    element.disabled = true;
  }
  canReset = false;
  clearBtn.disabled = !canReset;
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (callsEl.value > 0 || gigaEl.value > 0 || smsEl.value > 0) {
    getTheRightPackage();
  } else {
    dropErrorMessage("הזן בבקשה מספרים גדולים מ-0");
  }
});

clearBtn.addEventListener("click", resetForm);
