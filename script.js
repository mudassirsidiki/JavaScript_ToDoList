// const inputBox = document.getElementById("input-box")
// const listContainer = document.getElementById("list-container")
// const addButton = document.getElementById("add-button");

// function addTask(){
//     if(inputBox.value == ''){
//         alert("You must write something");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         // ADDING CROSS ICON 
//         let span = document.createElement("span");
//         span.innerHTML = "x";
//         li.appendChild(span);
//     }
//     inputBox.value = '';
// }

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName == "LI"){
//         e.target.classList.toggle("checked");
//     }
//     else if(e.target.tagName == "SPAN"){
//         e.target.parentElement.remove();
//     }
// }, false);


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button"); // Selecting the "Add Task" button

// Event listener for the button
addButton.addEventListener("click", addTask);  // Call addTask when button is clicked

function addTask(){
    if(inputBox.value == ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // ADDING CROSS ICON 
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = '';  // Clear the input after adding the task
}

// Event listener for toggling and deleting tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);



