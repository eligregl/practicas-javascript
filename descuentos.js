// const originalPrice = 120;
// const discount = 18;

// console.log({
//     originalPrice,
//     discount,
//     discountPricePercentage,
//     discountPrice
// })

function calculateDiscountPrice(price, discount) {
    const discountPricePercentage = 100 - discount;
    const discountPrice = (price * discountPricePercentage) / 100;

    return discountPrice;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const discountPrice = calculateDiscountPrice(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + discountPrice;
}