import EditData from "./EditData";
import RenderUi from "./RenderUi";
import { changeEditingFlag, isEditing } from "../../App";
import { targetid } from "./EditData";
import { PostData } from "./PostData";
import { PutData } from "./putData";
// const AddData = (e) => {
//   let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
//   e.preventDefault();
//   console.log(e.target.Status.value);
//   const formData = {
//     Task: e.target.task.value,
//     Priority: e.target.Priority.value,
//     Status: e.target.Status.value,
//     Date: DateInput.value,
//     id: crypto.randomUUID(),
//   };
//   datalist.push(formData);
//   localStorage.setItem("datalist", JSON.stringify(datalist));
//   RenderUi(datalist);
// };

// export default AddData;

const handleSubmit = (e) => {
  let form = document.getElementById("form");
  e.preventDefault();
  let datalist = JSON.parse(localStorage.getItem("datalist")) || [];

  if (!isEditing) {
    const formData = {
      Task: e.target.Task.value,
      Priority: e.target.Priority.value,
      Status: e.target.Status.value,
      Date: DateInput.value,
      Detail: DetailInput.value,
      id: crypto.randomUUID(),
    };
    datalist.push(formData);
    PostData(formData);

    localStorage.setItem("datalist", JSON.stringify(datalist));
    RenderUi(datalist);
    // console.log(e.target.Task);
    form.reset();
  }
  // console.log(e.target.Task);
  if (
    e.target.Task.value == "" ||
    e.target.Priority.value == "" ||
    e.target.Status.value == "" ||
    DateInput.value == ""
  )
    return;

  if (isEditing) {
    // console.log(datalist);
    datalist = datalist.map((itemdata) => {
      if (itemdata.id === targetid) {
        // console.log(targetid);
        itemdata.Task = taskNameInput.value;
        itemdata.Priority = PriorityInput.value;
        itemdata.Status = StatusInput.value;
        itemdata.Date = DateInput.value;
        itemdata.Detail = DetailInput.value;
      }
      PutData(itemdata.id, itemdata);
      return itemdata;
    });

    RenderUi(datalist);
    localStorage.setItem("datalist", JSON.stringify(datalist));
    changeEditingFlag();
    form.reset();
  }

  // const taskNameInput = document.getElementById("taskNameInput");
  // const PriorityInput = document.getElementById("PriorityInput");
  // const StatusInput = document.getElementById("StatusInput");
  // const DateInput = document.getElementById("DateInput");
  // datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  // const id = e.target.parentElement.id;
  // let addform = datalist.find((itemdata) => {
  //   return itemdata.id == id;
  // });
  // console.log(addform.Priority);
  // taskNameInput.value = addform.Task;
  // PriorityInput.value = addform.Priority;
  // StatusInput.value = addform.Status;
  // DateInput.value = addform.Date;
};

export default handleSubmit;
