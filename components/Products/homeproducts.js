import { addtocart } from "../addtocart/addtocart";
import { homequantitytoggle  } from "./homequantitytoggle";

const ProductContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
export const showProductcontainer = (products) => {
    if (!products) {
        return false;
    }
    products.forEach((elem) => {
        // console.log(elem);
        const { id, name, category, price, stock, description, image } = elem;

        const productclone = document.importNode(productTemplate.content, true);
        // console.log(productclone);
        productclone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productclone.querySelector(".productName").textContent = `${name}`;
        productclone.querySelector(".productDescription").textContent = description;
        productclone.querySelector(".productImage").src = image;
        productclone.querySelector(".productImage").alt = name;
        productclone.querySelector(".category").textContent = category;
        productclone.querySelector(".productPrice").textContent = `₹ ${price}`;
        productclone.querySelector(".productActualPrice").textContent = `₹ ${price * 4}`;
        productclone.querySelector(".productStock").textContent = stock;


        productclone.querySelector(".stockElement").addEventListener("click", (event) => {
            homequantitytoggle(event, id, stock);
        });

        productclone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addtocart(event, id, stock);

        });
        ProductContainer.append(productclone);
    });

};