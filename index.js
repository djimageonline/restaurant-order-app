import { menuArray } from "/data.js";

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    console.log(e.target.dataset);
    handleAddMenuItem(e.target.dataset.add);
  }
});

function handleAddMenuItem(addId) {
  const menuItemObject = menuArray.filter(function (menuItem) {
    console.log("menuObj:", menuItem.id, "addbtn:", addId);
    return menuItem.id === Number(addId);
  })[0];

  console.log(menuItemObject);
}

function getOrderMenuHtml() {
  let orderHtml = "";

  menuArray.forEach(function (menuItem) {
    orderHtml += `
    <div class="menu-item">
      <div class="menu-item-inner">
        <p class="emoji">${menuItem.emoji}</p>
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
