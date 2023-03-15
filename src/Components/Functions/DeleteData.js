import RenderUi from "./RenderUi";
import { deleteData } from "./DeletData";
import { getData } from "./getData";

const DeleteData = (e) => {
  let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  console.log(e.target.parentElement.id);
  e.preventDefault();
  const id = e.target.parentElement.id;
  let newlist = datalist.filter((itemdata) => {
    deleteData(id).then(() => {
      getData().then((data) => RenderUi(data));
    });
    return itemdata.id !== id;
  });
  datalist = newlist;
  // localStorage.setItem("datalist", JSON.stringify(datalist));
  // RenderUi(datalist);
};

export default DeleteData;
