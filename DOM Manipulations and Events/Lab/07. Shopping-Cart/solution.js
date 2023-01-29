function solve() {
  let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
  let textArea = document.getElementsByTagName("textarea")[0];

  let products = [];
  let totalPrice = 0;

  let checkoutDone = false;

  shoppingCart.addEventListener("click", function (event) {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }

    if(checkoutDone){
      return
    }

    let button = event.target;
    if (Array.from(button.classList).indexOf("add-product") >= 0) {
      let productElement = event.target.parentElement.parentElement;

      let name = productElement.querySelectorAll(".product-title")[0].textContent;
      let price = productElement.querySelectorAll(".product-line-price")[0].textContent;

      textArea.textContent += `Added ${name} for ${price} to the cart.\n`;

      if (products.indexOf(name) < 0) {
        products.push(name);
      }
      totalPrice += Number(price);

    }else if(Array.from(button.classList).indexOf('checkout') >= 0){
         textArea.textContent += `You bought ${products} for ${totalPrice.toFixed(2)}.`
         checkoutDone = true;
    }

  });
}
