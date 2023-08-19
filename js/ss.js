
// const display = document.getElementById('input'); 

// function calculatePercentage() {
//     try {
//         display.value = eval(display.value) / 100;
//     } catch (error) {
//         display.value = 'Error';
//     }
// }

// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const buttonText = button.value;

//         if (buttonText === '=') {
//             try {
//                 display.value = eval(display.value);
//             } catch (error) {
//                 display.value = 'Error';
//             }
//         } else if (buttonText === 'C') {
//             display.value = '';
//         } else if (buttonText === 'DEL') {
//             display.value = display.value.slice(0, -1);
//         } else if (buttonText !== '+/-' && buttonText !== '%') {
//             display.value += buttonText;
//         }
//     });
// });

/* 
// Using String.prototype
const display = document.getElementById('input');

function calculatePercentage() {
    try {
        const inputValue = parseFloat(display.value);
        display.value = (inputValue / 100).toString();
    } catch (error) {
        display.value = 'Error';
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.value;

        if (buttonText === '=') {
            try {
                const result = evaluateExpression(display.value);
                display.value = result.toString();
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            display.value = '';
        } else if (buttonText === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += buttonText;
        }
    });
});

function evaluateExpression(expression) {
    return Function('"use strict";return (' + expression + ')')();
}
 */