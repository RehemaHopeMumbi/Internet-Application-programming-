
document.addEventListener("DOMContentLoaded", function () {
  
    const submit = document.getElementById("submitBtn");
    const newTaskInput = document.getElementById("newtask");

    
    submit.disabled = true;

  
    newTaskInput.addEventListener("input", function () {
        
        submit.disabled = !newTaskInput.value.trim();
    });

    document.getElementById("task_Form").addEventListener("submit", function (event) {
        
        event.preventDefault();

    
        const taskText = newTaskInput.value.trim();

      
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;

        
        document.getElementById("task_List").appendChild(newTaskItem);

      
        newTaskInput.value = "";

      
        submit.disabled = true;
    });
});
