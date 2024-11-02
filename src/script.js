function calculate(operation) {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const output = document.getElementById('output');

    if (num1Input.value.trim() === '' || num2Input.value.trim() === '') {
        output.textContent = 'Заповніть обидва поля.';
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = 'Будь ласка, введіть правильні дані.';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                output.textContent = 'Ділення на нуль неможливе!';
                return;
            }
            result = num1 / num2;
            break;
    }

    output.textContent = result.toFixed(2);
}
