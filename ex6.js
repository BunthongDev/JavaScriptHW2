// Prompt the user to enter an amount in USD
let usdAmount = parseFloat(prompt("Enter the amount in USD:"));

if (isNaN(usdAmount)) {
    alert("Please enter a valid number.");
} else {
    let currency = prompt("Choose the currency to convert to (EUR, UAH, AZN):").toUpperCase();
    let result;

    // Set fictional exchange rates
    const rates = {
        EUR: 0.99, 
        UAH: 27.30, 
        AZN: 1.30
    };
    switch (currency) {
        case 'EUR':
            result = usdAmount * rates.EUR;
            break;
        case 'UAH':
            result = usdAmount * rates.UAH;
            break;
        case 'AZN':
            result = usdAmount * rates.AZN;
            break;
        default:
            alert("Currency not supported.");
            result = null;
    }

    if (result !== null) {
        alert(`The amount in ${currency} is: ${result.toFixed(2)}`);
    }
}
