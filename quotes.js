const quotes = document.getElementById("quote");
const writer = document.getElementById("author");
const tags = document.getElementById("tag-item");
const tagsList = document.getElementById("tag-list");
let listHtml = "";

async function getQuotes() {
  const result = await fetch("https://api.quotable.io/random");
  const resultJson = await result.json();
  const {content , author , tags: tagsArray}  = resultJson;

  quotes.innerHTML = content;
  writer.innerHTML = author;
  tagsArray.forEach(tag => {
  listHtml +=`<li class="tag-item">${tag}</li>`
  //tagsList.innerHTML = listHtml;
  });
  tagsList.innerHTML = listHtml;
}

getQuotes();

