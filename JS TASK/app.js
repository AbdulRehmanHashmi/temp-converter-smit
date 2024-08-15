document.getElementById('convertButton').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let convertedTemp;

    if (inputUnit === outputUnit) {
        convertedTemp = inputTemp;
    } else {
        if (inputUnit === 'Celsius') {
            if (outputUnit === 'Fahrenheit') {
                convertedTemp = (inputTemp * 9/5) + 32;
            } else if (outputUnit === 'Kelvin') {
                convertedTemp = inputTemp + 273.15;
            }
        } else if (inputUnit === 'Fahrenheit') {
            if (outputUnit === 'Celsius') {
                convertedTemp = (inputTemp - 32) * 5/9;
            } else if (outputUnit === 'Kelvin') {
                convertedTemp = ((inputTemp - 32) * 5/9) + 273.15;
            }
        } else if (inputUnit === 'Kelvin') {
            if (outputUnit === 'Celsius') {
                convertedTemp = inputTemp - 273.15;
            } else if (outputUnit === 'Fahrenheit') {
                convertedTemp = ((inputTemp - 273.15) * 9/5) + 32;
            }
        }
    }

    document.getElementById('resultDisplay').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${outputUnit}`;
});
