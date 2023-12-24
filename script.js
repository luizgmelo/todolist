const task = document.querySelector("#inTask");
const addButton = document.querySelector("#addButton");
const listTasks = document.querySelector("#listTasks");
let count = 0; 

function addTask() {
  if (task.value === '' || !isNaN(task.value)) {
    alert("Valor inválido, por favor digite apenas palavras")
    return
  }

  const div = document.createElement("div");
 

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  
  const newTask = document.createElement("label");
  newTask.classList = "task"
  newTask.innerHTML = task.value; 

  listTasks.appendChild(div);

  div.appendChild(checkbox);
  div.appendChild(newTask);

  task.value = '';
}

addButton.addEventListener("click", addTask);
