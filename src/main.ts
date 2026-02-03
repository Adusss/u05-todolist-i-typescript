import { v4 as uuidv4 } from "uuid";
import type { Todo } from "./types/Todo";
import "./style.css";
import { loadTodos, saveTodos } from "./services/todoStorage";

let todos: Todo[] = loadTodos();

const app = document.getElementById("app") as HTMLDivElement;

// ====== INPUT ADD ======
const inputHolder = document.createElement("div");
inputHolder.className = "input-holder";

const todoInput = document.createElement("input");
todoInput.type = "text";
todoInput.placeholder = "Add new task";
todoInput.className = "todo-input";

inputHolder.appendChild(todoInput);
app.appendChild(inputHolder);

// ====== ADD BUTTON ======
const buttonHolder = document.createElement("div");
buttonHolder.className = "button-holder";

const addBtn = document.createElement("button");
addBtn.textContent = "▼";
addBtn.className = "todo-button";

buttonHolder.appendChild(addBtn);
app.appendChild(buttonHolder);

// ====== LIST TODO ======
const todoList = document.createElement("ul");
todoList.className = "todo-list";
app.appendChild(todoList);

// ======  FILTER ======
const controlHolder = document.createElement("div");
controlHolder.className = "control-holder";

const filterHolder = document.createElement("div");
filterHolder.className = "filter-holder";

const filterInput = document.createElement("input");
filterInput.type = "text";
filterInput.placeholder = "Search...";
filterInput.className = "todo-filter";

filterHolder.appendChild(filterInput);

filterInput.oninput = () => render(filterInput.value);

// ====== Remove ALL TASK ======

const clearBtn = document.createElement("button");
clearBtn.textContent = "🗑️";
clearBtn.className = "clear-button";
clearBtn.onclick = () => {
  todos = [];
  saveTodos(todos);
  render();
};

controlHolder.appendChild(filterHolder);
controlHolder.appendChild(clearBtn);
app.appendChild(controlHolder);

// ====== RENDER ======
function render(filterText: string = "") {
  todoList.innerHTML = "";

  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filterText.toLowerCase()));

  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "todo-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onchange = () => {
      todo.completed = checkbox.checked;
      saveTodos(todos);
    };

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.contentEditable = "true";
    span.onblur = () => {
      todo.text = span.textContent || "";
      saveTodos(todos);
      render(filterInput.value);
    };

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => {
      todos = todos.filter((t) => t.id !== todo.id);
      saveTodos(todos);
      render(filterInput.value);
    };

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// ====== ADD NEW TASK ======
addBtn.onclick = () => {
  if (todoInput.value.trim() !== "") {
    todos.push({ id: uuidv4(), text: todoInput.value.trim(), completed: false });
    saveTodos(todos);
    todoInput.value = "";
    render(filterInput.value);
  }
};

render();
