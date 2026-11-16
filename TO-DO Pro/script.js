
// Step 1: Get HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Step 2: Add click event
addButton.addEventListener("click", function() {

    // Step 3: Get the text entered by user
    const taskText = taskInput.value;

    // Step 4: Create a new list item
    const listItem = document.createElement("li");

    // Step 5: Put task text inside list item
    listItem.textContent = taskText;

    // Step 6: Add list item to the task list
    taskList.appendChild(listItem);

    // Step 7: Clear input field
    taskInput.value = "";

});
