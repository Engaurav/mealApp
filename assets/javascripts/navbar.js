let mealData;
fetch("https://engaurav.github.io/mealApp/assets/data/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    mealData = data;
    // displaySearch(data, "P");
  }, true);

console.log("Hello");

let search = document.getElementById("search");
const inputHandler = function (e) {
  // console.log(e.target.value);
  displaySearch(mealData, e.target.value);
};

search.addEventListener("input", inputHandler);

function displaySearch(datas, searchItem) {
  let searchHtmlContainer = document.getElementById("search-display");
  searchHtmlContainer.innerHTML = "";
  searchHtmlContainer.style.display = "block";
  //   console.log(searchItem);

  for (key in datas) {
    // console.log("Key",key)
    datas[key].map((data, index) => {
      //   console.log(data);
      //   console.log("match", data.name.includes(searchItem));
      if (data.name.includes(searchItem)) {
        let searchHtml = `<a href="./html/singleItem.html?meal=${key}&index=${index}">${data.name}</a>`;
        searchHtmlContainer.innerHTML += searchHtml;
      }
    });
  }
  if (searchHtmlContainer.innerHTML.length == 0) {
    searchHtmlContainer.innerHTML = "<a href='#'>Not Matched Item </a>";
  }
  if (searchItem.length <= 0) {
    searchHtmlContainer.innerHTML = "";
  }
}
