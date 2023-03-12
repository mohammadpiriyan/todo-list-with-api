import RenderUi from "./RenderUi";
export let targetid;

const EditData = (e) => {
  const taskNameInput = document.getElementById("taskNameInput");
  const PriorityInput = document.getElementById("PriorityInput");
  const StatusInput = document.getElementById("StatusInput");
  const DateInput = document.getElementById("DateInput");
  const DetailInput = document.getElementById("DetailInput");
  const form = document.getElementById("form");
  let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  targetid = e.target.parentElement.id;
  let addform = datalist.find((itemdata) => {
    return itemdata.id == targetid;
  });
  taskNameInput.value = addform.Task;
  PriorityInput.value = addform.Priority;
  StatusInput.value = addform.Status;
  DateInput.value = addform.Date;
  DetailInput.value = addform.Detail;
};

export default EditData;
