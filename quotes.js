let quotes = document.getElementById("quote");
let author = document.getElementById("author");
let tags = document.getElementById("tag-item");
async function getQuotes() {
        let result = await fetch("https://api.quotable.io/random");
        let resultJson = await result.json();
        console.log(resultJson);
      }

      getQuotes();