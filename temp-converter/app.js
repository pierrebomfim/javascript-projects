const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNumb(num) {
    return Math.round(num * 100) / 100;
}

function convertFromCelcius() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNumb(fTemp);
    kelvinInput.value = roundNumb(kTemp);
}

function convertFromFahrenheit() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundNumb(cTemp);
    kelvinInput.value = roundNumb(kTemp);
}

function convertFromKelvin() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundNumb(cTemp);
    fahrenheitInput.value = roundNumb(fTemp);
}

function main() {
    celciusInput.addEventListener('input', convertFromCelcius);
    fahrenheitInput.addEventListener('input', convertFromFahrenheit);
    kelvinInput.addEventListener('input', convertFromKelvin);
}
main();
