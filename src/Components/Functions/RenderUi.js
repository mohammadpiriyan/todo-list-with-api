import El from "../../library/El";
import DeleteData from "./DeleteData";
import EditData from "./EditData";
import openModal from "../Modal/openModal";
import { changeEditingFlag } from "../../App";
import { isEditing } from "../../App";

const Priority = {
  Low: "bg-gray-200 text-gray-800",
  Medium: "bg-yellow-300 text-gray-800",
  Hight: "bg-red-500 text-gray-500",
};
const Status = {
  Todo: "bg-red-500 text-gray-500",
  Doing: "bg-yellow-300 text-gray-800",
  Done: "bg-green-600 text-gray-500",
};

const RenderUi = (data) => {
  const tbody = document.getElementById("tbodyTable");
  tbody.innerHTML = "";
  data.map((item) => {
    console.log(item.id);
    const row = El({
      element: "tr",
      child: [
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200 ",
          child: item.Task,
        }),
        El({
          element: "td",
          className: `${
            Priority[item.Priority]
          }"border-r px-6 py-4 border-neutral-200"`,
          child: item.Priority,
        }),
        El({
          element: "td",
          className: `${
            Status[item.Status]
          }"border-r px-6 py-4 border-neutral-200"`,
          child: item.Status,
        }),
        El({
          element: "td",
          className: "border-r px-6 py-4 border-neutral-200",
          child: item.Date,
        }),
        El({
          element: "td",
          className:
            "border-r px-6 py-4 border-neutral-200 flex gap-2 justify-center",
          child: [
            El({
              element: "button",
              className:
                "w-8 h-8 flex justify-center items-center bg-red-600 rounded",
              id: item.id,
              onclick: DeleteData,
              child: El({
                element: "img",
                className: "w-6",
                src: "./src/icon/bin.png",
              }),
            }),
            El({
              element: "button",
              className:
                "w-8 h-8 flex justify-center items-center bg-blue-600 rounded",
              id: item.id,
              onclick: (e) => {
                openModal();
                isEditing || changeEditingFlag();
                EditData(e);
              },
              child: El({
                element: "img",
                className: "w-6",
                src: "./src/icon/pen.png",
              }),
            }),
            El({
              element: "button",
              className:
                "w-8 h-8 flex justify-center items-center bg-gray-600 rounded",
              child: El({
                element: "img",
                className: "w-6",
                src: "./src/icon/eye.png",
              }),
            }),
          ],
        }),
      ],
    });
    tbody.append(row);
  });
};
export default RenderUi;
