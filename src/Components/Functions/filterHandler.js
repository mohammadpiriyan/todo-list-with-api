import { getData } from "./getData";
import RenderUi from "./RenderUi";

// const PriorityFilter = document.getElementById("PriorityFilter");
// const statusFilter = document.getElementById("statusFilter");

export function filterHandler(e) {
  const filter = document.getElementById("formFilter");
  let urlCreator = "";
  // const priorityFilterValue = e.target.value;
  console.log(filter);
  if (filter.Priority.value !== "All") {
    urlCreator += `&Priority=${filter.Priority.value}`;
  }
  if (filter.Status.value !== "All") {
    urlCreator += `&Status=${filter.Status.value}`;
  }
  if (filter.Date.value !== "") {
    urlCreator += `&Date=${filter.Date.value}`;
  }
  const responseFilter = fetch(`http://localhost:3002/tasks?${urlCreator}`)
    .then((data) => data.json())
    .then((data) => RenderUi(data));
}
