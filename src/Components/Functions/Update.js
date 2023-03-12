function updateTable() {
  datalist.find((item) => {
    if (item.id == editSelect) {
      addform.Task = taskNameInput.value;
      addform.Priority = PriorityInput.value;
      addform.Status = StatusInput.value;
      addform.Date = DateInput.value;
    }
  });
  renderUi(datalist);
  editSelect = null;
}
export default updateTable;
