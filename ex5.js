
let number = prompt("Please enter five-digit number:");
// Validate if the input is  five-digit number
if(number.length === 5 && !isNaN(number)) {

    if(number[0] === number[4] && number[1] === number[3]) {
        alert(number + " is palindrome.");
    } else {
        alert(number + " is not palindrome.");
    }
} else {
    alert("Please enter a five-digit number.");
}
