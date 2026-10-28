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
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text !== "") {
    tasks.push(text);
    input.value = "";
    render();
  }
});
