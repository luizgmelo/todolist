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
  checkbox.setAttribute("id", count)
  checkbox.setAttribute("type", "checkbox");
  
  const newTask = document.createElement("label");
  newTask.setAttribute("for", count)
  newTask.classList = "task"
  newTask.textContent = task.value; 

  const editButton = document.createElement("span");
  editButton.textContent = "edit"
  editButton.classList = "material-icons"

  const deleteButton = document.createElement("span");
  deleteButton.textContent = "delete"
  deleteButton.classList = "material-icons"


  listTasks.appendChild(div);

  div.appendChild(checkbox);
  div.appendChild(newTask);
  div.appendChild(editButton);
  div.appendChild(deleteButton);

  task.value = '';
  count++
}

addButton.addEventListener("click", addTask);
