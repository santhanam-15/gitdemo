let tasks = ["Learn Git", "Prepare demo"];
const list = document.getElementById("taskList");

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

render();
