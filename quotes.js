let quotes = document.getElementById("quote");
let author = document.getElementById("author");
let tags = document.getElementById("tag-item");

async function getQuotes() {
  let result = await fetch("https://api.quotable.io/random");
  let resultJson = await result.json();

  let content = resultJson.content;
  let writer = resultJson.author;
  let tagsArr = resultJson.tags;

  tagsArr.forEach(element => {
    tags.innerHTML = element;
  });

  quotes.innerHTML = content;
  author.innerHTML = writer;
}

getQuotes();