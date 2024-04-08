// Ask the user for a number from 0 to 9 and output a special character located on this key (1–!, 2–@, 3–#, and so on).

let number = prompt("Enter a number from 0 - 9: ");
number = parseInt(number);
let message = number === 1 ? "1-!":
number === 2 ? "2-@":
number === 3 ? "3-#":
number === 4 ? "4-#":
number === 5 ? "5-#":
number === 6 ? "6-#":
number === 7 ? "7-#":
number === 8 ? "8-#":
number === 9 ? "9-#":
"The input not match with our option!! Please try again"

alert(message);
