import { menuArray } from "/data.js";

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddMenuItem(e.target.dataset.add);
  }
});

function handleAddMenuItem(addId) {
  let test = "";
  const menuItemObject = menuArray.filter(function (menuItem) {
    return menuItem.id === Number(addId);
  })[0];

  // console.log(menuItemObject);

  test += ` 
  <div class="your-order-items" id="your-order-items">
  <div class ="your-order-items-inner">
    <h2> Your Order </h2>
    <div></div>
    <p>${menuItemObject.name} </p>
    <p>${menuItemObject.price} </p>
  </div>
</div>
  `;
  return test;
}

function getOrderMenuHtml() {
  let orderHtml = "";
  let renderYourOrder = "";

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
    console.log(handleAddMenuItem);
  });
  return orderHtml;
}

function render() {
  document.getElementById("order-menu").innerHTML = getOrderMenuHtml();
  // document.getElementById("your-order").innerHTML =
}

render();
