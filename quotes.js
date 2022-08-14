const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const tags = document.getElementById("tag-item");

async function getQuotes() {
  const result = await fetch("https://api.quotable.io/random");
  const resultJson = await result.json();

  const content = resultJson.content;
  const writer = resultJson.author;
  const tagsArr = resultJson.tags;

  tagsArr.forEach(tag => {
    tags.innerHTML = tag;
  });

  quotes.innerHTML = content;
  author.innerHTML = writer;
}

getQuotes();