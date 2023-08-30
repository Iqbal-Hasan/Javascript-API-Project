// watch video (what is an api)
// what is json (javascript object notation)
// JSON.stringify()
// JSON.parse()
// fetch promise, response, .then
//

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => newData(data));

function newData(datas) {
  for (const data of datas) {
      console.log(data);
    const tbody = document.querySelector("#tbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.username}</td>
      <td>${data.email}</td>
      <td>${data.website}</td>
      <td>${data.company.name}</td>
      `;
    tbody.appendChild(tr);
  }
}
