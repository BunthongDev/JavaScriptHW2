let score = 0;
// Question 1
let answer1 = prompt("What is the capital of Cambodia?\nA: Phnom Pehn\nB: Berlin\nC: Madrid");
if (answer1.toUpperCase() === "A") {
    score += 2;
}
// Question 2
let answer2 = prompt("What is 2 + 2?\nA: 3\nB: 4\nC: 5");
if (answer2.toUpperCase() === "B") {
    score += 2;
}
// Question 3
let answer3 = prompt("Who wrote 'Hamlet'?\nA: William Shakespeare\nB: Leo Tolstoy\nC: Mark Twain");
if (answer3.toUpperCase() === "A") {
    score += 2;
}
alert("You scored " + score + " points.");
