function fruits(name, quantity, price ){

    let totalPrice = quantity/1000 * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(quantity/1000).toFixed(2)} kilograms ${name}.`);
}

fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35)