// Ask the user for their age and determine who they are: a child (0–12), a teenager (12–18), an adult (18–60), or a retiree (60–...).
let age = prompt("Enter your age: ")
if (age <= 12) {
    alert("You're child.")
}else if (age <= 18) {
    alert("You're teenager.")
}else if (age <= 60 ){
    alert("You're adult.")
}else{
    alert("You're retired.")
}

// ternary operator
let age2 = prompt("Enter your age: ");
alert(
  age2 <= 12 ? "You're child." :
  age2 <= 18 ? "You're teenager." :
  age2 <= 60 ? "You're adult." :
  "You're retired."
);
