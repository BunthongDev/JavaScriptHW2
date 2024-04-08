let day = parseInt(prompt("Enter the day:"));
let month = parseInt(prompt("Enter the month:")) - 1;
let year = parseInt(prompt("Enter the year:"));
let enteredDate = new Date(year, month, day);

if (isNaN(enteredDate.getTime())) {
    alert("Invalid date entered.");
} else {
    enteredDate.setDate(enteredDate.getDate() + 1);
    
    let nextDay = enteredDate.getDate();
    let nextMonth = enteredDate.getMonth() + 1;
    let nextYear = enteredDate.getFullYear();
    
    alert(`The date following ${day}/${month + 1}/${year} is ${nextDay}/${nextMonth}/${nextYear}.`);
}
