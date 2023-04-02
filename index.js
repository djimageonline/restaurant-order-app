import { menuArray } from "/data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let yourOrderArray = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    document.getElementById("your-order-item").innerHTML = handleAddMenuItem(e.target.dataset.add);
    document.getElementById("your-order").classList.remove("hidden");
  } else if (e.target.dataset.remove) {
    removeItemFromOrder(e.target.dataset.remove);
  }
});

function handleAddMenuItem(addId) {
  let addItem = "";

  yourOrderArray.push(menuArray[addId]);

  yourOrderArray.forEach(function (orderItem) {
    addItem += ` 
        <div class="order-item">
          <p>${orderItem.name} </p>
          <p>$${orderItem.price} </p>
          <button class="remove-btn" data-remove="${orderItem.id}">remove</button>
        </div>
          `;
  });
  console.log(yourOrderArray);
  return addItem;
}

function removeItemFromOrder(removeItemId) {
  const removeItemObj = yourOrderArray.filter(function (item) {
    return item.id === Number(removeItemId);
  })[0];

  console.log(yourOrderArray);
  let indexOfObject = yourOrderArray.indexOf(removeItemObj);
  yourOrderArray.splice(indexOfObject, 1);

  console.log(yourOrderArray);

  render();
}

function getOrderMenuHtml() {
  let orderHtml = "";

  menuArray.forEach(function (menuItem) {
    orderHtml += `
    <div class="menu-item">
      <div class="menu-item-inner">
        <img src="${menuItem.image}" class="image">
        <div class="menu-item-container">
          <span class="menu-item-detail">
            <h2 class="name">${menuItem.name}</h2>
            <p class="ingredients">${menuItem.ingredients}</p>
            <p class="price">$${menuItem.price}</p>
          </span>
        </div>
        <img class="add-btns" src="img/add-btn.png" data-add="${menuItem.id}"></img>
      </div>
    </div>
    `;
  });
  return orderHtml;
}

function render() {
  document.getElementById("order-menu").innerHTML = getOrderMenuHtml();
}

render();
