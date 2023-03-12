import RenderUi from "./RenderUi";

const AddData = (e) => {
  let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  e.preventDefault();
  console.log(e.target.Status.value);
  const formData = {
    Task: e.target.task.value,
    Priority: e.target.Priority.value,
    Status: e.target.Status.value,
    Date: DateInput.value,
    id: crypto.randomUUID(),
  };
  datalist.push(formData);
  localStorage.setItem("datalist", JSON.stringify(datalist));
  RenderUi(datalist);
};

export default AddData;
