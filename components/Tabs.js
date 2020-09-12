// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// topics container holder
const topicsContainer = document.querySelector(".topics");

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((succesfulData) => {
    // console.log(succesfulData);
    succesfulData.data.topics.forEach((title) => {
      // creating elements
      //   console.log("data topics", succesfulData.data.topics);
      let topicDiv = document.createElement("div");
      topicDiv.classList.add("tab");
      topicDiv.textContent = title;
      topicsContainer.appendChild(topicDiv);
    });
  });
