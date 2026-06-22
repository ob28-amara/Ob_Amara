let total = 0;

function addToCart(name, price) {
  let cartItems = document.getElementById("cart-items");

  let li = document.createElement("li");

  li.innerHTML = `
    ${name} - $${price.toFixed(2)}
    <button onclick="removeItem(this, ${price})">
      Remove
    </button>
  `;

  cartItems.appendChild(li);

  total += price;

  updateTotal();
}

function removeItem(button, price) {
  button.parentElement.remove();
  total -= price;
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").innerHTML =
    "Total: $" + total.toFixed(2);
}

function showMenu(category) {
  document.getElementById("coffee").style.display = "none";
  document.getElementById("cake").style.display = "none";
  document.getElementById(category).style.display = "flex";
}

window.onload = function () {
  showMenu('coffee');
};
``