import Container from "./layout/Container/Container";
import El from "./library/El";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";
import Modal from "./Components/Modal/Modal";
// API==================
// export let BASE_URL = "http://localhost:3002";
// let dbApi = getData(BASE_URL, "users");
// =====================
export let isEditing = false;
export const changeEditingFlag = () => {
  isEditing = !isEditing;
};

export const App = () => {
  const app = El({
    element: "div",
    className: "flex flex-col",
    child: [Navbar(), Table(), Modal()],
  });
  return Container(app);
};
