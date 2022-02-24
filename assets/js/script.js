var taskIdCounter = 0;

var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
  // package up data as an object
  // check if input values are empty strings
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

    // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;
  
    // package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };
  
    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
  }

  var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
  
    // add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);
  
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
  
    tasksToDoEl.appendChild(listItemEl);
  
    // increase task counter for next unique id
    taskIdCounter++;
  };

  formEl.addEventListener("submit", taskFormHandler);
