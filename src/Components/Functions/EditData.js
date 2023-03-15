import { getData, getDataForEdit } from "./getData";
import RenderUi from "./RenderUi";
import { data } from "autoprefixer";
export let targetid;

const EditData = (e) => {
  const taskNameInput = document.getElementById("taskNameInput");
  const PriorityInput = document.getElementById("PriorityInput");
  const StatusInput = document.getElementById("StatusInput");
  const DateInput = document.getElementById("DateInput");
  const DetailInput = document.getElementById("DetailInput");
  const form = document.getElementById("form");
  targetid = e.target.parentElement.id;
  console.log(targetid);

  getDataForEdit(targetid).then((data) => {
    taskNameInput.value = data.Task;
    PriorityInput.value = data.Priority;
    StatusInput.value = data.Status;
    DateInput.value = data.Date;
    DetailInput.value = data.Detail;
  });
  // let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  // let addform = datalist.find((itemdata) => {
  //   return itemdata.id == targetid;
  // });
};

export default EditData;
