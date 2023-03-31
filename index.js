import { menuArray } from "/data.js";

function getOrderMenuHtml() {
  let orderHtml = "";

  menuArray.forEach(function (menuItem) {
    orderHtml += `
    <div class="menu-item">
      <div class="menu-item-inner">
        <p class="emoji">${menuItem.emoji}</p>
        <div class="menu-item-container">
          <h2 class="name">${menuItem.name}</h2>
          <p class="ingredients">${menuItem.ingredients}</p>
          <p class="price">$${menuItem.price}</p>
        </div>
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
