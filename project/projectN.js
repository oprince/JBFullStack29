let tasks = [];
let deleteBtn = [];

document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(window.localStorage.getItem("tasks"));
  drawTaskCard();
});

let task = {
  name: "",
  date: "",
  time: "",
};

function addTask() {
  const name = document.querySelector("textarea").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  task = {
    name,
    date,
    time,
  };

  tasks.push({ ...task });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function drawTaskCard() {
  const taskContainer = document.querySelector(".col-3");
  taskContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    // drawing the card each time clicked on addTask with the task object values.
    taskContainer.innerHTML += `
        <div class="task_Id">
            <button class="remove-btn">
                <span class="glyphicon glyphicon-remove"></span>
            </button>
            <div>${task.name}</div>
            <p>${task.time} ${task.date}</p>
        </div>
        `;
  });

  const taskCards = document.querySelectorAll(".task_Id");
  const removeButton = document.querySelectorAll(".remove-btn");
  taskCards.forEach((_, index) => {
    removeButton[index].addEventListener("click", () => {
      tasks.splice(index, 1); // removing the exact index clicked
      window.localStorage.setItem("tasks", JSON.stringify(tasks)); // saving the updated task to the localstorage
      location.reload(); // reloading window to apply changes
    });
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
  drawTaskCard();
});

function resetForm() {
  document.getElementById("form").reset();
}
