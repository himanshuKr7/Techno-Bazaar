

const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};

export const getcardsfrlclstrg = () => {
    let cardsproduct = localStorage.getItem("cart-productslclstrg");
    if (!cardsproduct) {
        return [];
    }
    cardsproduct = JSON.parse(cardsproduct);
    updateCartValue(cardsproduct);
    return cardsproduct;
};
