import { getcardsfrlclstrg, updateCartValue } from "./getcardsfrlclstrg";
import { showToast } from "../../showToast";

getcardsfrlclstrg();
export const addtocart = (event, id, stock) => {
    let localstorageproducts = getcardsfrlclstrg();

    const currentCard = document.querySelector(`#card${id}`);
    
    let price = currentCard.querySelector(".productPrice").innerText;
    let quantity = currentCard.querySelector(".productQuantity").innerText;

    price = price.replace("₹", "");

    let existingProd = localstorageproducts.find(
        (curprod) => (curprod.id === id)
    );
    
    if (existingProd) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price) * quantity;
        existingProd.quantity = quantity;
        existingProd.price = price;

        localstorageproducts = localstorageproducts.map((curprod) => {
            return curprod.id === id ? existingProd : curprod;
        });
    } else {
        price = Number(price) * Number(quantity);
        quantity = Number(quantity);
        localstorageproducts.push({ id, price, quantity });
    }

    localStorage.setItem("cart-productslclstrg", JSON.stringify(localstorageproducts));
    updateCartValue(localstorageproducts);

    showToast("add", id);
}
