async function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    if (!taskInput) return alert("Please enter a task");

    await fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: taskInput }),
    });
    loadTasks();
}

async function loadTasks() {
    const response = await fetch("/tasks");
    const tasks = await response.json();

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((t, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${t.task} - ${t.status}`;
        taskList.appendChild(li);
    });
}

window.onload = loadTasks;
