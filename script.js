document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    console.log("Temperature Input: ", temperatureInput); // Debugging
    console.log("Unit Input: ", unitInput); // Debugging

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDiv.textContent = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    if (unitInput === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        resultDiv.textContent = `${temperature}° Celsius is ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;

        convertedTemperature = temperature + 273.15;
        convertedUnit = 'Kelvin';
        resultDiv.textContent += ` and ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
        resultDiv.textContent = `${temperature}° Fahrenheit is ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;

        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        convertedUnit = 'Kelvin';
        resultDiv.textContent += ` and ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
    } else if (unitInput === 'kelvin') {
        convertedTemperature = temperature - 273.15;
        convertedUnit = 'Celsius';
        resultDiv.textContent = `${temperature} Kelvin is ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;

        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        convertedUnit = 'Fahrenheit';
        resultDiv.textContent += ` and ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
    }
}
