import EditData from "./EditData";
import RenderUi from "./RenderUi";
import { changeEditingFlag, isEditing } from "../../App";
import { targetid } from "./EditData";
import { PostData } from "./PostData";
import { PutData } from "./putData";
import { getData } from "./getData";
import { data } from "autoprefixer";
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
  // let datalist = getData();
  console.log(isEditing);
  if (!isEditing) {
    const formData = {
      Task: e.target.Task.value,
      Priority: e.target.Priority.value,
      Status: e.target.Status.value,
      Date: DateInput.value,
      Detail: DetailInput.value,
      id: crypto.randomUUID(),
    };
    // datalist = datalist.then((response) => {
    //   return response.push(formData);
    // });
    PostData(formData).then(() => {
      getData().then((data) => RenderUi(data));
    });
    // localStorage.setItem("datalist", JSON.stringify(datalist));

    // RenderUi(datalist);
    // console.log(e.target.Task);
    form.reset();
  }
  // console.log(e.target.Task);
  // if (
  //   e.target.Task.value == "" ||
  //   e.target.Priority.value == "" ||
  //   e.target.Status.value == "" ||
  //   DateInput.value == ""
  // )
  //   return;

  if (isEditing) {
    // console.log(datalist);
    console.log(taskNameInput.value);
    getData()
      .then((response) => {
        response = response.map((itemdata) => {
          // console.log(response);
          if (itemdata.id === targetid) {
            console.log(itemdata.Task, taskNameInput.value);
            itemdata.Task = taskNameInput.value;
            itemdata.Priority = PriorityInput.value;
            itemdata.Status = StatusInput.value;
            itemdata.Date = DateInput.value;
            itemdata.Detail = DetailInput.value;
            PutData(itemdata.id, itemdata);
          }
          return itemdata;
        });
        return response;
      })
      .then((response) => {
        RenderUi(response);
        form.reset();
      });

    // RenderUi(datalist);
    // localStorage.setItem("datalist", JSON.stringify(datalist));
    changeEditingFlag();
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
