const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const tags = document.getElementById("tag-item");

async function getQuotes() {
  const result = await fetch("https://api.quotable.io/random");
  const resultJson = await result.json();

  const {content , author , tags: tagsArray}  = resultJson;

  quotes.innerHTML = content;
  author.innerHTML = author;
  tagsArray.forEach(tag => {
    tags.innerHTML = tag;
  });
}

getQuotes();