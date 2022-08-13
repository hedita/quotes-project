  async function getQuotes() {
        let result = await fetch("https://api.quotable.io/random");
        let resultJson = await result.json();
        console.log(resultJson);
      }

      getQuotes();