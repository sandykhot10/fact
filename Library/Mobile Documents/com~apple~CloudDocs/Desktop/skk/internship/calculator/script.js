let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";
const buttonArray = Array.from(buttons);

// Function to play sound (optional)
function playSound() {
    let audio = new Audio('click-sound.mp3');  // Replace with the path to your sound file
    audio.play();
}

// Function to handle button click event
function handleButtonClick(buttonValue) {
    if (buttonValue === '=') {
        try {
            expression = eval(expression);
            input.value = expression;
        } catch (error) {
            input.value = "Error";
            expression = "";
        }
    } else if (buttonValue === 'AC') {
        expression = "";
        input.value = expression;
    } else if (buttonValue === 'DEL') {
        expression = expression.slice(0, -1);  // Shorter syntax to remove last character
        input.value = expression;
    } else {
        expression += buttonValue;
        input.value = expression;
    }
}

// Add event listener to each button
buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        // Play sound (optional)
        playSound();

        // Handle button visual feedback
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 150);

        // Handle the button action
        handleButtonClick(buttonValue);
    });
});
