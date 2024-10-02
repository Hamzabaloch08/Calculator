const MAX_LENGTH = 11; // Set the maximum length here

function Click(numbers) {
    const screen = document.getElementById('Screen');
    if (screen.value.length < MAX_LENGTH) {
        screen.value += numbers;
    } else {
        alert(`Maximum input length of ${MAX_LENGTH} reached.`);
    }
}

function Allclear() {
    document.getElementById('Screen').value = '';
}

function Clear() {
    const screen = document.getElementById('Screen');
    screen.value = screen.value.slice(0, -1); // Corrected to remove the last character
}

function equal() {
    let calculate = document.getElementById('Screen');
    try {
        calculate.value = eval(calculate.value);
    } catch (error) {
        alert("Invalid expression");
        calculate.value = '';
    }
}
