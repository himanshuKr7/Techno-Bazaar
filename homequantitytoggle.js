export const homequantitytoggle=(event, id, stock)=>{
     const currentCard = document.querySelector(`#card${id}`);
     console.log(currentCard);
    const productQuantity = currentCard.querySelector(".productQuantity");
    
    let quantity = parseInt(productQuantity.getAttribute("dataquantity")) || 1;

    if (event.target.className === "cartIncrement")
    {
     if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock; 
    }
    }

    if (event.target.className === "cartDecrement")
    {
        if (quantity > 1)
        {
            quantity--;
        }
    }


    productQuantity.innerText = quantity;
    console.log(quantity);
    productQuantity.setAttribute("dataquantity", quantity.toString());
    return quantity;
    
}