// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cards = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((succesfulData) => {
    console.log(succesfulData);
    const cardArray = Object.values(succesfulData.data.articles);
    console.log("is this working", cardArray);
    cardArray.forEach((language) => {
      console.log("content", language);
      language.forEach((content) => {
        cards.appendChild(article(content));
      });
    });
  });

const article = (content) => {
  // creating the elements
  const cardContainer = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgSrc = document.createElement("img");
  const authorName = document.createElement("span");

  // class lists

  cardContainer.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // text content
  headline.textContent = content.headline;
  imgSrc.textContent = content.authorPhoto;
  authorName.textContent = content.authorName;

  // append
  cardContainer.append(headline, author);
  author.appendChild(imgContainer, authorName);
  imgContainer.appendChild(imgSrc);

  // event listener
  cardContainer.addEventListener("click", () => {
    console.log(headline.textContent);
  });

  return cardContainer;
};
