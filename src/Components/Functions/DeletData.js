export const deleteData = async (id) => {
  await fetch(`http://localhost:3002/tasks/${id}`, {
    method: "DELETE",
  });
};
