// let sendBtn = document.getElementById("sendBtn");
// let checkBoxDiv = document.getElementById("checkBoxDiv");
// let iconDiv = document.getElementById("iconDiv");
// let task = document.getElementById("task");
// let taskBox = document.getElementById("taskBox");
// let taskRow = document.getElementById("taskRow");

// sendBtn.addEventListener("click", () => {
//   if (task.value == false) {
//     alert("Malumot yo'q");
//   } else {
//     let taskRow = document.createElement("div");
//     taskRow.classList.add("flex");
//     taskRow.classList.add("justify-between");
//     taskBox.appendChild(taskRow);

//     let taskLabel = document.createElement("div");

//     taskLabel.classList.add("flex");
//     taskLabel.classList.add("gap-[20px]");

//     let taskIcons = document.createElement("div");

//     taskIcons.classList.add("flex");
//     taskIcons.classList.add("gap-[20px]");

//     taskRow.appendChild(taskLabel);
//     taskRow.appendChild(taskIcons);

//     let checkInput = document.createElement("input");
//     checkInput.classList.add("w-[20px]");
//     checkInput.type = "checkbox";
//     taskLabel.appendChild(checkInput);

//     let label = document.createElement("label");
//     label.classList.add("text-[24px]");
//     label.textContent = task.value;
//     taskLabel.appendChild(label);

//     let edit = document.createElement("i");
//     edit.classList.add("fa-solid");
//     edit.classList.add("fa-pen-to-square");
//     edit.classList.add("cursor-pointer");
//     taskIcons.appendChild(edit);

//     let trash = document.createElement("i");
//     trash.classList.add("fa-solid");
//     trash.classList.add("fa-trash");
//     trash.classList.add("cursor-pointer");
//     taskIcons.appendChild(trash);
//   }
// });






let sendBtn = document.getElementById("sendBtn");
      let darkBtn = document.getElementById("darkBtn");
      let task = document.getElementById("task");
      let taskBox = document.getElementById("taskBox");

      let isDarkMode = false;

      sendBtn.addEventListener("click", () => {
        if (task.value.trim() === "") {
          alert("Please enter a task");
        } else {
          addTask(task.value);
          task.value = ""; 
        }
      });

      function addTask(taskText) {
        let taskRow = document.createElement("div");
        taskRow.classList.add("flex", "justify-between", "items-center", "border-b", "border-gray-300", "py-2");

        let taskLabel = document.createElement("div");
        taskLabel.classList.add("flex", "gap-[20px]");

        let taskIcons = document.createElement("div");
        taskIcons.classList.add("flex", "gap-[20px]");

        taskRow.appendChild(taskLabel);
        taskRow.appendChild(taskIcons);

        let checkInput = document.createElement("input");
        checkInput.classList.add("w-[20px]");
        checkInput.type = "checkbox";
        taskLabel.appendChild(checkInput);

        let label = document.createElement("label");
        label.classList.add("text-[24px]");
        label.textContent = taskText;
        taskLabel.appendChild(label);

        let edit = document.createElement("i");
        edit.classList.add("fa-solid", "fa-pen-to-square", "cursor-pointer");
        edit.addEventListener("click", () => editTask(taskText, label, edit));
        taskIcons.appendChild(edit);

        let trash = document.createElement("i");
        trash.classList.add("fa-solid", "fa-trash", "cursor-pointer");
        trash.addEventListener("click", () => taskRow.remove());
        taskIcons.appendChild(trash);

        taskBox.appendChild(taskRow);
      }

      function editTask(originalTaskText, label, editIcon) {
        let newTask = prompt("Edit your task", originalTaskText);
        if (newTask && newTask.trim() !== "") {
          label.textContent = newTask;
        }
      }

      darkBtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("bg-gray-900", isDarkMode);
        document.body.classList.toggle("text-white", isDarkMode);
        document.body.classList.toggle("bg-white", !isDarkMode);
        document.body.classList.toggle("text-black", !isDarkMode);
      });