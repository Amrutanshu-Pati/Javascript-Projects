//dom
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");

let apiQuotes = [];
// get Quotes from api
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  // const apiUrl = "https://goquotes-api.herokuapp.com/api/v1/all/quotes";
  let response = await fetch(apiUrl);
  apiQuotes = await response.json();
  // console.log(apiQuotes);
  // console.log(typeof apiQuotes);
  // console.log(apiQuotes.quotes);
  // console.log(apiQuotes.quotes[200].text);
  newQuote();
}

//Show New Quotes
function newQuote() {
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   console.log(quote);
  // check quote length
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  // condition if autho field is blank then replace with "Unknown"
  if (!quote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }
}

// on load
getQuotes();
// newQuote();
