import products from "./api/products.json"
import { fetchQuantityFromcart } from "./fetchQuantityFromcart";
import { getcardsfrlclstrg } from "./getcardsfrlclstrg";
import { incrementDecrment } from "./incrementDecrement";
import { removeprodfromcart } from "./removeprodfromcart";
import { updatecartproductstotal } from "./updatecartproductstotal";
 
let currentcartproducts = getcardsfrlclstrg();

let filterProducts = products.filter((curProd) => {
  return currentcartproducts.some((curElem) => curElem.id === curProd.id);
});

const productcontainer = document.querySelector("#productCartContainer");
const producttempelate = document.querySelector("#productCartTemplate");

const showcartproducts = () =>
{
   filterProducts.forEach((element) =>
{
    const { id, name, category, price, stock, description, image } = element;
    
       const cartproductClone = document.importNode(producttempelate.content, true);
       
       const lclactualdata = fetchQuantityFromcart(id, price);
    
   cartproductClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
   cartproductClone.querySelector(".category").textContent = category;
   cartproductClone.querySelector(".productName").textContent = name;
   cartproductClone.querySelector(".productImage").src = image; 
   cartproductClone.querySelector(".productQuantity").textContent = lclactualdata.quantity;
   cartproductClone.querySelector(".productPrice").textContent = lclactualdata.price;



      cartproductClone.querySelector(".remove-to-cart-button").addEventListener("click",
         () =>
         {
            removeprodfromcart(id);
         }
      )
      cartproductClone.querySelector(".stockElement").addEventListener("click", (event) =>
      {
         incrementDecrment(event, id, stock, price);
      })
    
    productcontainer.appendChild(cartproductClone);
})
}

showcartproducts();

updatecartproductstotal();