// GET Request
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

// POST Request
fetch('https://example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'example data' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

// PUT Request
fetch('https://example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'updated data' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

// DELETE Request
fetch('https://example.com/data/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

// ====================================================================

const data = { name: "John", age: 30 };

fetch('http://localhost:3000/persons', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

// ====================================================================
const AddData = (e) => {
  let datalist = JSON.parse(localStorage.getItem("datalist")) || [];
  e.preventDefault();
  console.log(e.target.Status.value);
  const formData = {
    Task: e.target.task.value,
    Priority: e.target.Priority.value,
    Status: e.target.Status.value,
    Date: DateInput.value,
    id: crypto.randomUUID(),
  };
  datalist.push(formData);
  localStorage.setItem("datalist", JSON.stringify(datalist));
  RenderUi(datalist);

  // Send data to the JSON server
  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
};

// export default AddData;