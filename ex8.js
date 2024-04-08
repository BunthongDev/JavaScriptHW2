let circleLength = parseFloat(prompt("Enter the circle's length (circumference):"));
let squarePerimeter = parseFloat(prompt("Enter the square's perimeter:"));

if (isNaN(circleLength) || isNaN(squarePerimeter)) {
    alert("Please enter valid numbers for both the circle's length and the square's perimeter.");
} else {
    let circleDiameter = circleLength / Math.PI;
    let squareSide = squarePerimeter / 4;
    if (circleDiameter <= squareSide) {
        alert("The circle can fit into the specified square.");
    } else {
        alert("The circle cannot fit into the specified square.");
    }
}
