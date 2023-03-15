import { getData } from "./getData";
import RenderUi from "./RenderUi";

const PriorityFilter = document.getElementById("PriorityFilter");

PriorityFilter.addEventListener("change", PriorityFilterHandler);
export function filterHandler(e) {
  const priorityFilterValue = e.target.value;
  if (priorityFilterValue == "All") {
    const result = getData();
    RenderUi(result);
  }
  const responseFilter = fetch(
    `http://localhost:3002/tasks?priority=${priorityFilterValue}&/`
  )
    .then((data) => data.json())
    .then((data) => RenderCard(data, true));
}
