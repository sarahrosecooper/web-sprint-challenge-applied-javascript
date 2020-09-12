// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const Header = () => {
  // creating elements
  const headerWrapper = document.createElement("div");
  const date = document.createElement("span");
  const h1 = document.createElement("h1");
  const temp = document.createElement("span");

  // add class lists

  headerWrapper.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // add text content

  date.textContent = "MARCH 28, 2020";
  h1.textContent = "Lambda Times";
  temp.textContent = "98°";

  // appending children

  headerWrapper.append(date, h1, temp);

  return headerWrapper;
};

// main container element
const headerContainer = document.querySelector(".header-container");

// append function to header html

headerContainer.appendChild(Header());
