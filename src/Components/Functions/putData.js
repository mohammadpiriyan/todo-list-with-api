export const PutData = async (id, obj) => {
  await fetch(`http://localhost:3002/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
