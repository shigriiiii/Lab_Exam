const products = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];
const cart = [];

function addToCart(product) {
  cart.push(product);
}

function removeFromCart(product) {
  const index = cart.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function updateQuantity(product, quantity) {
  const index = cart.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    cart[index].quantity = quantity;
  }
}

function displayCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "$" + product.price.toFixed(2);

    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.value = product.quantity || 1;
    quantity.addEventListener("change", (event) => {
      const newQuantity = parseInt(event.target.value);
      updateQuantity(product, newQuantity);
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeFromCart(product);
      displayCart();
    });

    cartItem.appendChild(name);
    cartItem.appendChild(price);
    cartItem.appendChild(quantity);
    cartItem.appendChild(removeButton);

    cartContainer.appendChild(cartItem);
  });
}

const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
// addToCartButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     const product = products[index];
//     addToCart(product);
//     displayCart();
// addToCartButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     const product = products[index];
//     addToCart(product);
//     displayCart();
//     button.disabled = true; // Disable the button after adding the product
//   });
// });
// })  ;
const container = document.getElementById("product-container");
products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.name;
  image.classList.add("product-image");

  imageContainer.appendChild(image);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart-btn");
// ----------------------------------------------------------------

var buttons = document.getElementsByClassName("add-to-cart-btn");  
Array.from(buttons).forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = products[index];
    addToCart(product);
    displayCart();
    button.disabled = true;
  });
});
  // ----------------------------------------------------------------
  infoDiv.appendChild(price);
  infoDiv.appendChild(button);

  productDiv.appendChild(imageContainer);
  productDiv.appendChild(infoDiv);

  container.appendChild(productDiv);
});