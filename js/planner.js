let tasks = [];

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");
const count = document.getElementById("task-count");

function addTask() {
  const text = input.value.trim();
  if (text === "") {
    alert("Please enter a task.");
    return;
  }
  tasks.push({ id: Date.now(), text: text, done: false });
  input.value = "";
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(function (task) {
    if (task.id === id) {
      return { id: task.id, text: task.text, done: !task.done };
    }
    return task;
  });
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  renderTasks();
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    if (task.done) {
      li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = task.text;

    const buttons = document.createElement("div");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = task.done ? "Undo" : "Complete";
    doneBtn.addEventListener("click", function () {
      toggleTask(task.id);
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });

    buttons.appendChild(doneBtn);
    buttons.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(buttons);
    list.appendChild(li);
  });

  const remaining = tasks.filter(function (t) { return !t.done; }).length;
  count.textContent = tasks.length + " task(s), " + remaining + " remaining";
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

renderTasks();