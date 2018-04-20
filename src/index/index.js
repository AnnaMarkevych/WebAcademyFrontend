/**
 * @param {HTMLElement} el
 * @param {Array} optionList
 */

import './index.scss';
let accordion = document.querySelector(".accordion");

/**
 * @param {Array} optionList
 */
function dynamicDropdown(optionList) {
  optionList.forEach((obj) => {
      let button = document.createElement("button");
      button.classList.add("accordion-btn-header");
      accordion.appendChild(button);
      button.textContent = obj.tittle;

      let description = document.createElement("div");
      description.classList.add("accordion-description");
      accordion.appendChild(description);
      description.textContent = obj.description;
  })
}


const accordionList = [
     {
         tittle: "1Header",
         description: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         tittle: "2Header",
         description: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         tittle: "3Header",
         description: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         tittle: "4Header",
         description: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         tittle: "5Header",
         description: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
 ];


dynamicDropdown(accordionList);
const allButtons = document.querySelectorAll(".accordion-btn-header");
allButtons.forEach((item) => {
    dropdown(item);
});


function dropdown(element) {
    element.addEventListener("click", (event) => {
        allButtons.forEach((item) => {
            if (item === event.target) {
                item.classList.toggle("opened");
            } else {
                item.classList.remove("opened");
            }
        });
    });
}