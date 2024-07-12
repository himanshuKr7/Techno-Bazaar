import { getcardsfrlclstrg } from "./getcardsfrlclstrg";

export const updatecartproductstotal = () =>
{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    
    let currentcartproducts = getcardsfrlclstrg();
    let initialvalue = 0;
    let totalsum = currentcartproducts.reduce((accum,currprod) => {
        let prodctprice = parseInt(currprod.price) || 0;
        return accum + prodctprice;
    }, initialvalue);

    productSubTotal.textContent = `₹${totalsum}`;
    productFinalTotal.textContent = `₹${totalsum + 50}`;
}