import El from "../../library/El";
import Button from "../Button/Button";
import AddData from "../Functions/AddData";
import handleSubmit from "../Functions/handleSubmit";
import RenderUi from "../Functions/RenderUi";
import closeModal from "./closeModal";

const Modal = () => {
  return El({
    element: "div",
    id: "modal",
    className:
      "w-screen h-screen backdrop-blur-sm absolute flex justify-center items-center hidden",
    child: [
      El({
        element: "form",
        id: "form",
        onsubmit: handleSubmit,
        className:
          "flex flex-col bg-white w-[45rem] items-center rounded justify-center gap-4 divide-y divide-slate-700",
        child: [
          El({
            element: "div",
            className: "w-full flex justify-center items-center",
            child: [
              El({
                element: "h2",
                className: "",
                child: "New Task",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "w-full flex flex-col gap-16 justify-center items-center p-2",
            child: [
              El({
                element: "input",
                id: "taskNameInput",
                name: "Task",
                className: "w-full rounded p-3 border",
                placeholder: "Task Name",
              }),
              El({
                element: "div",
                className: "flex w-full justify-center items-center gap-2",
                child: [
                  El({
                    element: "select",
                    className: "w-full rounded p-2 border",
                    name: "Priority",
                    id: "PriorityInput",
                    child: [
                      El({
                        element: "option",
                        value: "Priority",

                        disabled: true,
                        selected: true,
                        child: "Priority",
                      }),
                      El({
                        element: "option",
                        value: "Low",
                        child: "Low",
                      }),
                      El({
                        element: "option",
                        value: "Medium",
                        child: "Medium",
                      }),
                      El({
                        element: "option",
                        value: "Hight",
                        child: "Hight",
                      }),
                    ],
                  }),

                  El({
                    element: "select",
                    id: "StatusInput",
                    className: "w-full rounded p-2 border",
                    name: "Status",
                    id: "StatusInput",
                    child: [
                      El({
                        element: "option",
                        disabled: true,
                        selected: true,
                        value: "Status",
                        child: "Status",
                      }),
                      El({
                        element: "option",
                        value: "Todo",
                        child: "Todo",
                      }),
                      El({
                        element: "option",
                        value: "Doing",
                        child: "Doing",
                      }),
                      El({
                        element: "option",
                        value: "Done",
                        child: "Done",
                      }),
                    ],
                  }),

                  El({
                    element: "input",
                    id: "DateInput",
                    className: "w-full rounded p-2 border",
                    type: "date",
                  }),
                ],
              }),

              El({
                element: "textarea",
                rows: "4",
                cols: "50",
                name: "",
                className: "w-full rounded p-2 border",
                id: "DetailInput",
                child: "Detail",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex w-full justify-between p-2",
            child: [
              Button({
                element: "button",
                type: "button",
                child: "cancel",
                variant: "outlined",
                onclick: () => {
                  closeModal();
                },
              }),
              Button({
                element: "button",
                type: "submit",
                child: "Save",
                id: "saveButton",
                variant: "contained",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default Modal;
