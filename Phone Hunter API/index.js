const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", function () {
  let searchResult = input.value;
  input.value = "";
  loadData(searchResult);
});

const loadData = async (searchResult) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchResult}`
  );
  const datas = await res.json();
  const phones = datas.data;

  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (const phone of phones) {
    const div = document.createElement("div");
    div.classList.add("main");
    div.innerHTML = `
        <div class="img-div">
            <img src="${phone.image}" alt="">
        </div>
        <div class="text-div">
            <h1 class="h1">${phone.phone_name}</h1>
        </div>
        `;
    container.appendChild(div);
  }
};
loadData("iphone");
