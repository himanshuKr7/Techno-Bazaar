import { getcardsfrlclstrg } from "./getcardsfrlclstrg"
import { showToast } from "./showToast";
import { updatecartproductstotal } from "./updatecartproductstotal";
import { updateCartValue } from "./updatecartvalue";

export const removeprodfromcart = (id) =>
{
    let currentcartproducts = getcardsfrlclstrg();
    let cartprod = currentcartproducts.filter((curprod) => (curprod.id
        !== id));
    
     localStorage.setItem("cart-productslclstrg", JSON.stringify(cartprod));
    

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
    removeDiv.remove();
    
        showToast("delete", id);
    }
    updateCartValue(cartprod);
    updatecartproductstotal();
}