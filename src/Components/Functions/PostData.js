export const PostData = async (obj) => {
  const request = await fetch("http://localhost:3002/tasks", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await request.json();
};
