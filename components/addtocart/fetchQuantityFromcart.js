import { getcardsfrlclstrg } from "./getcardsfrlclstrg";

export const fetchQuantityFromcart = (id,price) =>
{
    let currentcartproducts = getcardsfrlclstrg();
    let existingProd = currentcartproducts.find((curprod) => curprod.id === id);
    let quantity = 1;
    if (existingProd)
    {
        quantity = existingProd.quantity;
        price = existingProd.price;
    }
    return { quantity, price };
}