const task = document.querySelector("#task");
const button = document.querySelector("#button");
const div = document.querySelector("#div-tasks");
let count = 0; 

function addTask() {
  count++
  if (task.value == '' || !isNaN(task.value)) {
    alert("Valor inválido, por favor digite apenas palavras")
  }

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", count);
 

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  
  const newTask = document.createElement("label");
  newTask.classList = "task"
  newTask.innerHTML = task.value; 

  div.appendChild(newDiv);
  newDiv.appendChild(checkbox);
  newDiv.appendChild(newTask);
}

button.addEventListener("click", addTask);
