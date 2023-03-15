filter.addEventListener('change', filterHandler);
function filterHandler(e) {
  const filterValue = e.target.value;
  if (filterValue == 'All') {
    const result = Data();
    RenderCard(result, true);
  }
  const responseFilter = fetch(
    `http://localhost:3000/countries?region=${filterValue}`
  )
    .then((data) => data.json())
    .then((data) => RenderCard(data, true));
}