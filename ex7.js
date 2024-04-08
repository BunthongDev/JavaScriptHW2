// Prompt the user to enter the purchase amount
let purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));

if (isNaN(purchaseAmount)) {
    alert("Please enter a valid number.");
} else {
    let discountRate;
    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discountRate = 0.03; // 3% discount
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discountRate = 0.05; // 5% discount
    } else if (purchaseAmount >= 500) {
        discountRate = 0.07; // 7% discount
    } else {
        discountRate = 0; // No discount
    }
    // Calculate the discount amount
    let discountAmount = purchaseAmount * discountRate;

    // Calculate the final price after discount
    let finalPrice = purchaseAmount - discountAmount;

    // Output the discount price to user
    if (discountRate > 0) {
        alert(`You received a discount of ${discountRate * 100}%. The discounted price is: ${finalPrice.toFixed(2)}`);
    } else {
        alert("No discount applied. The total price is: " + purchaseAmount.toFixed(2));
    }
}
