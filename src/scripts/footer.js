var taskBarInputContent = "";

var taskBar = document.getElementById("task-bar");
var taskBarInput = document.getElementById("task-bar-input");
var taskBarButton = document.getElementById("task-bar-button");

function taskBarFocusInEvent() {
    taskBarInput.value = taskBarInputContent;
    taskBarButton.style.display = (taskBarInput.value != "" ? "block" : "none");
}

function taskBarFocusOutEvent() {
    taskBarInputContent = taskBarInput.value;
    taskBarInput.value = "";
    taskBarButton.style.display = "none";
}

function addTask() { 
    taskBarButton.style.display = (taskBarInput.value != "" ? "block" : "none");
}

document.getElementById("task-bar").addEventListener("focusin", taskBarFocusInEvent);
document.getElementById("task-bar").addEventListener("focusout", taskBarFocusOutEvent);
document.getElementById("task-bar-input").addEventListener("input", addTask)