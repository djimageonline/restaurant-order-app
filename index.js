import { menuArray } from "/data.js";

let totalAmount = document.getElementById("total-amount");
let yourOrderArray = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    document.getElementById("your-order-item").innerHTML = handleAddMenuItem(e.target.dataset.add);
    document.getElementById("your-order").classList.remove("hidden");
  } else if (e.target.dataset.remove) {
    removeItemFromOrder(e.target.dataset.remove);
  } else if (e.target.dataset.submit) {
    handleSubmitOrderPayModal(e.target.dataset.submit);
  }
});

function handleAddMenuItem(addId) {
  let addItem = "";
  document.getElementById("your-order").style.display = "inline";
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
  getTotalForYourOrder();
  return addItem;
}

function removeItemFromOrder(removeItemId) {
  let removeItem = "";
  const removeItemObj = yourOrderArray.filter(function (item) {
    return item.id === Number(removeItemId);
  })[0];

  let indexOfObject = yourOrderArray.indexOf(removeItemObj);
  yourOrderArray.splice(indexOfObject, 1);

  if (yourOrderArray.length === 0) {
    document.getElementById("your-order").style.display = "none";
  }

  yourOrderArray.forEach(function (orderItem) {
    removeItem += ` 
        <div class="order-item">
          <p>${orderItem.name} </p>
          <p>$${orderItem.price} </p>
          <button class="remove-btn" data-remove="${orderItem.id}">remove</button>
        </div>
          `;
  });
  getTotalForYourOrder();
  document.getElementById("your-order-item").innerHTML = removeItem;
  return removeItem;
}

function getTotalForYourOrder() {
  let totalSum = 0;
  yourOrderArray.forEach(function (orderItem) {
    totalSum += orderItem.price;
  });
  totalAmount.innerHTML = `$${totalSum}`;
}

function handleSubmitOrderPayModal() {
  document.getElementById("pay-modal").classList.remove("hidden");
  const payModal = document.getElementById("pay-modal");
  let form = "";

  form += `
  <h2>Enter Card Details</h2>
   <div class ="pay-modal-inner">
   <form>
      <input 
        type="text"
        name="name"
        id="name"
        placeholder="Enter name"
        required
      >
      <input 
        type="text"
        name="card"
        id="card"
        placeholder="Enter card number"
        required
      >
      <input 
        type="text"
        name="cvv"
        id="cvv"
        placeholder="Enter CVV"
        required
      >
    </form>
   </div>
   <button class="pay" id="pay">Pay</button>  
  `;
  payModal.innerHTML = form;
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
