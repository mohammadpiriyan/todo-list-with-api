export const getData = async () => {
  try {
    const response = await (await fetch(`http://localhost:3002/tasks`)).json();
    const data = await response;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getDataForEdit = async (id) => {
  try {
    const response = await (
      await fetch(`http://localhost:3002/tasks/${id}`)
    ).json();
    const data = await response;
    return data;
  } catch (err) {
    console.log(err);
  }
};
