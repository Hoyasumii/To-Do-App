var taskBarInputContent = "";

var taskBar = document.getElementById("task-bar");
var taskBarInput = document.getElementById("task-bar-input");
var taskBarButton = document.getElementById("task-bar-button");

function taskBarFocusInEvent() {
    if (taskBarInput.value == "") {
        taskBarInput.value = taskBarInputContent;
        taskBar.getElementsByTagName("label")[0].style.top = "-20px";
    }

    taskBarButton.style.display = (taskBarInput.value != "" ? "block" : "none");
}

function taskBarFocusOutEvent() {
    if (taskBarInput.value == "") {
        taskBarInputContent = taskBarInput.value;
        taskBarInput.value = "";
        taskBarButton.style.display = "none";
        taskBar.getElementsByTagName("label")[0].style.top = "10px";
    }
    else {
        taskBar.getElementsByTagName("label")[0].style.top = "-20px";
    }
}

function taskBarInputButtonEffect() { 
    taskBarButton.style.display = (taskBarInput.value != "" ? "block" : "none");
}

function buttonTest() {
    alert("foi");
}

taskBar.addEventListener("focusin", taskBarFocusInEvent);
taskBar.addEventListener("focusout", taskBarFocusOutEvent);
taskBarInput.addEventListener("input", taskBarInputButtonEffect);
taskBarButton.addEventListener("click", buttonTest);