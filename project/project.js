function addTask() {
  const task = {
    Name: this.Name,
    dueDate: this.dueDate,
    dueTime: this.dueTime,
  };

  task.Name = document.getElementById("task").value;
  task.dueDate = document.getElementById("date").value;
  task.dueTime = document.getElementById("time").value;

  let newTask = document.createElement("div");

  let taskname = document.createElement("p");
  let taskdate = document.createElement("p");
  let tasktime = document.createElement("p");

  newTask.appendChild(taskname);
  newTask.appendChild(taskdate);
  newTask.appendChild(tasktime);

  let taskN = document.createTextNode(task.Name);
  let taskD = document.createTextNode(task.dueDate);
  let taskT = document.createTextNode(task.dueTime);

  taskname.appendChild(taskN);
  taskdate.appendChild(taskD);
  tasktime.appendChild(taskT);

  let br = document.createElement("br");
  taskname.appendChild(br);

  document.getElementById("taskDiv").appendChild(newTask);
}
