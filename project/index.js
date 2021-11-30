const formEl = document.querySelector("form");
const allInputs = Array.from(document.querySelectorAll("input"));
const resetFormBtn = document.querySelector(".reset-form");
const submitBtn = document.querySelector(".add-task");
const messagesEl = document.querySelector(".messages");

let form = {};
let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  initiateForm();
  if (getLS("tasks")) {
    tasks = getLS("tasks");
    drawTasks();
  }
});

const initiateForm = () => {
  form = {
    task: "",
    time: "",
    date: "",
  };
};

const validationMessage = (type, msg) => {
  messagesEl.innerHTML = `
    <div class="alert ${
      type === "error" ? "alert-danger" : "alert-success"
    } d-flex align-items-center mt-3" role="alert">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
           ${msg}
        </div>
    </div>
    `;
  setTimeout(() => {
    messagesEl.innerHTML = "";
  }, 3000);
};

const getLS = (key) => JSON.parse(localStorage.getItem(key));
const saveLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const updateForm = (ev) => {
  form = {
    ...form,
    [ev.target.name]: ev.target.value,
  };
};

allInputs.forEach((el) => {
  el.addEventListener("input", updateForm);
});

const addTask = () => {
  if (form.task !== "" && form.time !== "" && form.date !== "") {
    tasks.push(form);
    saveLS("tasks", tasks);
    drawTasks();
    validationMessage("success", "Added new task");
    resetForm();
  } else {
    allInputs.forEach((input) => {
      if (!input.value) {
        input.style.background = "#ffd5d5";
      } else {
        input.style.background = "unset";
      }
    });
    validationMessage("error", "Please fill in all fields");
  }
};

const resetForm = () => {
  initiateForm();
  allInputs.forEach((input) => {
    input.style.background = "unset";
  });
  formEl.reset();
};

const drawTasks = () => {
  const tasksList = document.querySelector(".tasks-list");
  tasksList.innerHTML = "";
  tasks.forEach((task) => {
    tasksList.innerHTML += `
        <div class="tasks-card col-3">
            <button class="tasks-card__remove-btn hide">
                <span class="fas fa-times" aria-hidden="true"></span>
            </button>
            <div class="tasks-card__content">
                ${task.task}
            </div>
            <div class="tasks-card__time-date">
            <span class="tasks-card__date">
                <i class="far fa-calendar-alt"></i>
                <span>${task.date}</span>
            </span>
            <span class="tasks-card__time">
                <i class="far fa-clock"></i>
                <span>${task.time}</span>
            </span>
            </div>
        </div>
    `;
  });
  const cards = document.querySelectorAll(".tasks-card");
  const deleteBtns = Array.from(
    document.querySelectorAll(".tasks-card__remove-btn")
  );
  cards.forEach((card, index) => {
    card.addEventListener("mouseover", () => {
      deleteBtns[index].classList.add("active");
    });
    card.addEventListener("mouseout", () => {
      deleteBtns[index].classList.add("hide");
      deleteBtns[index].classList.remove("active");
    });
    deleteBtns[index].addEventListener("click", () => {
      tasks.splice(index, 1);
      updateUI();
    });
  });
};

formEl.addEventListener("submit", (ev) => {
  ev.preventDefault();
  addTask();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

resetFormBtn.addEventListener("click", resetForm);

function updateUI() {
  document.dispatchEvent(new CustomEvent("update-ui"));
  saveLS("tasks", tasks);
}

document.addEventListener("update-ui", () => drawTasks());
