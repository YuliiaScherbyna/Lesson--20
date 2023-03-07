// Завдання 1

let age = prompt("How old are you?");
if (age <= 17) { confirm("Do you study at school?"); 
}
else if (age > 17 && age < 25) { confirm('Do you study at University?'); 
}
else if (age >= 25 && age < 60) {
    confirm('Do you have a job?');
}
else { confirm('What are you doing?') };


// Завдання 2
let display = prompt('Display:')
switch (display) {
 case 'block':
   alert('Display: block');
   break;
 case 'flex':
    alert(" Display: flex");
    break;
 case 'grid':
    alert("Display: grid");   
    break
    case 'inline':
    alert("Display: inline" );
    break;
 case 'none':
    alert('Display:none' );
    break;
 default:
    alert("Set 'display: inline-block;'");
}

// Завдання 3
let number = prompt("Please enter the number", '1');
while (isNaN(number) || +number < 1) {
  number = prompt('Your number is incorrect, please enter a valid number');
}
let result = number * 12;
alert(`${number} by 12 equals ${result}`);

// Завдання 4
for (let i = 2; i < 52; i += 2)
console.log(i);