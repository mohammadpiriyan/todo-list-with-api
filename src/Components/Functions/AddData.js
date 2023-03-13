import { PostData } from "./PostData";
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
  PostData(formData);
  console.log("slm");
  console.log(PostData(formData));
  datalist.push(formData);
  localStorage.setItem("datalist", JSON.stringify(datalist));
  RenderUi(datalist);

  // Send data to the JSON server

  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error))
};

export default AddData;

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

//   // Send data to the JSON server
//   fetch('http://localhost:3000/tasks', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
// };

// export default AddData;
