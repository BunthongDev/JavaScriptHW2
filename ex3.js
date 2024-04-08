let number = prompt("Please enter a three-digit number:");
if (number.length === 3) {
    let firstDigit = number[0];
    let secondDigit = number[1];
    let thirdDigit = number[2];
    
    if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
        alert("Equal digits.");
    } else {
        alert("Not equal digits.");
    }
} else {
    alert("Please enter a three-digit number.");
}
