import El from "../../library/El";
import Button from "../Button/Button";
import AddData from "../Functions/AddData";
import handleSubmit from "../Functions/handleSubmit";
import RenderUi from "../Functions/RenderUi";
import closeFilter from "./openFilter";
import { filterHandler } from "../Functions/filterHandler";

const filter = () => {
  return El({
    element: "div",
    id: "filter",
    className:
      "w-3/12 h-screen absolute flex right-0 justify-center items-center hidden",
    child: [
      El({
        element: "form",
        id: "form",
        className: "flex flex-col bg-white w-full h-screen gap-4",
        child: [
          El({
            element: "div",
            className: "w-full flex justify-between p-4",
            child: [
              El({
                element: "h2",
                className: "font-semibold",
                child: "Filters",
              }),
              El({
                element: "button",
                className: "",
                child: "X",
                onclick: () => {
                  closeFilter();
                },
              }),
            ],
          }),
          El({
            element: "form",
            id: "formFilter",
            onchange: filterHandler,
            className: "flex flex-col p-2 gap-4",
            child: [
              El({
                element: "label",
                child: "Priority:",
              }),
              El({
                element: "select",
                className: "w-full rounded p-2 border",
                name: "Priority",
                id: "PriorityFilter",
                child: [
                  El({
                    element: "option",
                    value: "All",
                    selected: true,
                    child: "All",
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
                element: "label",
                child: "Status:",
              }),
              El({
                element: "select",
                className: "w-full rounded p-2 border",
                name: "Status",
                id: "statusFilter",
                child: [
                  El({
                    element: "option",
                    selected: true,
                    value: "All",
                    child: "All",
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
                element: "label",
                child: "Deadline:",
              }),
              El({
                element: "input",
                className: "w-full rounded p-2 border",
                name: "Date",
                id: "DeadlineFilter",
                type: "date",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default filter;
