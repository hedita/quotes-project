const quotes = document.getElementById("quote");
const writer = document.getElementById("author");
const tags = document.getElementById("tag-item");
const tagsList = document.getElementById("tag-list");
const refreshButton = document.getElementById("refresh-button");

async function getQuotes() {
  const result = await fetch("https://api.quotable.io/random");
  const resultJson = await result.json();
  const {content , author , tags: tagsArray}  = resultJson;
  let listHtml = "";

  quotes.innerHTML = content;
  writer.innerHTML = author;
  tagsArray.forEach(tag => {
    listHtml += `<li class="tag-item">${tag}</li>`
  });
  tagsList.innerHTML = listHtml;
}

getQuotes(); 

refreshButton.addEventListener("click", function() {
  getQuotes();
});
