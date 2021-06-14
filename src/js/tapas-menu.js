import "../scss/modules/tapas-menu.scss";

console.log(
  "Day 15 log: A challenge with a few twists. I was able to find a solution on my own and initially I completed the challenge myself. However the solution as described in the course video was much cleaner, so I did a few changes to the code. I also added the option of removing list items"
);

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

const items = JSON.parse(localStorage.getItem("plates")) || [];

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;

  const newItem = {
    text,
    checked: false,
  };

  items.push(newItem);

  localStorage.setItem("plates", JSON.stringify(items));

  generateList(items, itemsList);

  this.reset();
}

function generateList(plates = [], listElement) {
  listElement.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" ${
              plate.checked ? "checked" : ""
            } " id="item${i}" data-index='${i}'/>
            <label for='item${i}'>${plate.text}</label>
            <span class="delete-item" data-remove=${i}>❌</span>
        </li>
        `;
    })
    .join("");

  //   listenToChecks(listElement);  // INSTEAD OF ADDING AN EVENTLISTENER FOR EACH NEWLY GENERATED <LI> ITEM, THE EVENT LISTENER CAN BE ADDED TO THE PARENT AND THE CALLED FUNCTION CAN CHECK IF THE EVENT TRIGGER TOOK PLACE ON ONE OF THE CHILDREN WE ARE INTERESTED IN (IN THIS CASE, "INPUT") - "EVENT DELEGATION"
}

// function listenToChecks(list) {
//   const checkboxes = list.querySelectorAll("li input");

//   checkboxes.forEach((checkbox) =>
//     checkbox.addEventListener("change", toggleCheck)
//   );
// }

function toggleCheck(e) {
  // MY INITIAL SOLUTION, WITHOUT EVENT DELEGATION - THE FUNCTION WAS CALLED NOT ON THE PARENT, BUT ON EACH PARTICULAR CHILD
  //   const index = this.dataset.index;
  //   items[index].checked = this.checked;

  //   const listedPlates = JSON.stringify(items);

  //   localStorage.setItem("plates", listedPlates);
  const el = e.target;

  if (!el.matches("input")) return;

  const index = el.dataset.index;
  items[index].checked = el.checked;

  localStorage.setItem("plates", JSON.stringify(items));
}

function deleteItem(e) {
  const el = e.target;

  if (!el.matches("span")) return;

  const index = el.dataset.remove;
  items.splice(index, 1);

  localStorage.setItem("plates", JSON.stringify(items));

  generateList(items, this);
}

// BELOW CODE REPLACED BY OR OPERATOR IN THE "items" ARRAY ASSIGNMENT
// if (localStorage.getItem("plates")) {
//   let loadedItems = JSON.parse(localStorage.getItem("plates"));
//   generateList(loadedItems, itemsList);

//   items.push(...loadedItems);
// }

generateList(items, itemsList);

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleCheck);
itemsList.addEventListener("click", deleteItem);
