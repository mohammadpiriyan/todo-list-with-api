import { App } from "./src/App";
import "./src/style/index.css";
import RenderUi from "./src/Components/Functions/RenderUi";

const datalist = JSON.parse(localStorage.getItem("datalist")) || [];
const root = document.getElementById("app");
root.appendChild(App());
RenderUi(datalist);
