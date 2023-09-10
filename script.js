const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const btndell = document.getElementById("btnDeleteAll");
var elem = document.getElementById("done-lane");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
//   newTask.innerHTML =`<i class="fas fa-times"></i>`;
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "" ;
});

btndell.addEventListener("click", ()=>{
elem.innerHTML=` <h3 class="heading">Done</h3> <a id="btnDeleteAll" href="#">	
Delete All
</a>`;
})
