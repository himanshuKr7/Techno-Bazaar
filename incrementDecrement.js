import { getcardsfrlclstrg } from "./getcardsfrlclstrg";
import { updatecartproductstotal } from "./updatecartproductstotal";

export const incrementDecrment = ( event,id, stock, price) => {

    const selector = `#card${id}`;
    console.log(`Selector: ${selector}`);

    const currentCard = document.querySelector(selector);
    if (!currentCard) {
        console.error(`Card with id #card${id} not found`);
        return;
    }
    
    const productQuantity = currentCard.querySelector(".productQuantity");
    const productPrice = currentCard.querySelector(".productPrice");

    let currentcartproducts = getcardsfrlclstrg();
    let existingProd = currentcartproducts.find((curProd) => curProd.id === id);
    
    let quantity = 1;
    let localstrgprice = price;

    if (existingProd) {
        quantity = existingProd.quantity;
        localstrgprice = existingProd.price;
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
        }
    }

    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity--;
        }
    }

    localstrgprice = quantity * price;
    localstrgprice = Number(localstrgprice.toFixed(2));

    let updatedCart = currentcartproducts.map((curProd) => {
        return curProd.id === id ? { id, quantity, price: localstrgprice } : curProd;
    });

    if (!existingProd) {
        updatedCart.push({ id, quantity, price: localstrgprice });
    }

    localStorage.setItem("cart-productslclstrg", JSON.stringify(updatedCart));

    if (productQuantity && productPrice) {
        productQuantity.textContent = quantity;
        productPrice.textContent = `₹${localstrgprice.toFixed(2)}`;
    }
    updatecartproductstotal();
};
