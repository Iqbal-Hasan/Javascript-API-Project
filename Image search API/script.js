const asscessKey = "vzzYiD2e1va7MxfgnhbNy-LKQXu6laWmajYxDvV1VY8";

const form = document.querySelector("form");
const input = document.querySelector("#search-input");
const search = document.querySelector("#button");
const showMore = document.querySelector("#btn-show-more");
const searchResults = document.querySelector("#search-results");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = input.value;
  const url = `https://api.unsplash.com/search.photos?page=${page}&query=${inputData}$client_id=${asscessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;
  console.log(results);

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  results.map((results) =>{

  })
}
