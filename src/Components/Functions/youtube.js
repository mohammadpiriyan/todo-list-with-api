const youtube = () => {
  window.addEventListener("load", () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    const taskNameInput = document.getElementById("taskNameInput");
    const PriorityInput = document.getElementById("PriorityInput");
    const StatusInput = document.getElementById("StatusInput");
    const DateInput = document.getElementById("DateInput");
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", (e) => {
      e.preventDefault();

      const todo = {
        Task: taskNameInput.value,
        Priority: PriorityInput.value,
        Status: StatusInput.value,
        Date: new Date().getTime(),
        Date: DateInput.value,
        id: crypto.randomUUID(),
      };
      todos.push(todo);
      localStorage.setItem("todos".JSON.stringify(todos));
      e.target.reset();
    });
  });
};
export default youtube;
