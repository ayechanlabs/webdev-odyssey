// get DOM elements from UI
const getInputTemp = document.querySelector("#temp-decimal-input"),
      fromUnit = document.querySelector("#from-temp-units"),
      toUnit = document.querySelector("#to-temp-units"),
      convertBtn = document.querySelector("#convert-btn"),
      resultTxt = document.querySelector(".result-text");

function checkInput() {

    // STEP BY STEP VERSION
    // for length we can use greater than zero or not equal to zero
    // if ((getInputTemp.value.length > 0) && (fromUnit.value !== "From Unit") && (toUnit.value !== "To Unit")) {
    //     convertBtn.disabled = false;
    // } else {
    //     convertBtn.disabled = true;
    // }
    // SIMPLIFY VERSION
    convertBtn.disabled = !(
        (getInputTemp.value.length > 0) && 
        (fromUnit.value !== "From Unit") && 
        (toUnit.value !== "To Unit")
    );
}

getInputTemp.addEventListener("input", checkInput);
fromUnit.addEventListener("change", checkInput);
toUnit.addEventListener("change", checkInput);

checkInput();

function convertTemperature() {
    // let currentTemp = Number(getInputTemp.value), convertTemp = 0;

    // // Convert Fahrenheit to Celsius
    // if (fromUnit.value === "Fahrenheit" && toUnit.value === "Celsius") {
    //     convertTemp = (currentTemp - 32) * 5/9;
    // }
    // // Convert Fahrenheit to Kelvin
    // else if (fromUnit.value === "Fahrenheit" && toUnit.value === "Kelvin") {
    //     convertTemp = (currentTemp - 32) * 5/9 + 273.15;
    // }
    // // Convert Fahrenheit to Fahrenheit
    // else if (fromUnit.value === "Fahrenheit" && toUnit.value === "Fahrenheit") {
    //     convertTemp = currentTemp;
    // }

    // // Convert Celsius to Fahrenheit
    // else if (fromUnit.value === "Celsius" && toUnit.value === "Fahrenheit") {
    //     convertTemp = (currentTemp * (9/5)) + 32;
    // }
    // // Convert Celsius to Kelvin
    // else if (fromUnit.value === "Celsius" && toUnit.value === "Kelvin") {
    //     convertTemp = (currentTemp + 273.15);
    // }
    // // Convert Celsius to Celsius
    // else if (fromUnit.value === "Celsius" && toUnit.value === "Celsius") {
    //     convertTemp = currentTemp;
    // }

    // // Convert Kelvin to Fahrenheit
    // else if (fromUnit.value === "Kelvin" && toUnit.value === "Fahrenheit") {
    //     convertTemp = (currentTemp - 273.15) * 9/5 +32;
    // }
    // // Convert Kelvin to Celsius
    // else if (fromUnit.value === "Kelvin" && toUnit.value === "Celsius") {
    //     convertTemp = currentTemp - 273.15;
    // }
    // // Convert Kelvin to Kelvin
    // else {
    //     convertTemp = currentTemp
    // }

    // return convertTemp;

    const currentTemp = Number(getInputTemp.value); // Pure number for accurate math
    let celsius = 0;

    // 1. Convert input unit to Base (Celsius)
    if (fromUnit.value === "Celsius") {
        celsius = currentTemp;
    } else if (fromUnit.value === "Fahrenheit") {
        celsius = (currentTemp - 32) * 5 / 9;
    } else if (fromUnit.value === "Kelvin") {
        celsius = currentTemp - 273.15;
    }

    // 2. Convert Base (Celsius) to target unit
    if (toUnit.value === "Celsius") return celsius;
    if (toUnit.value === "Fahrenheit") return (celsius * 9 / 5) + 32;
    if (toUnit.value === "Kelvin") return celsius + 273.15;

    return celsius;
}

convertBtn.addEventListener("click", function() {
    let result = convertTemperature();
    const safeResult = isNaN(result) ? 0 : result;
    
    resultTxt.textContent = `${getInputTemp.value} ${fromUnit.value} is ${safeResult.toFixed(2)} ${toUnit.value}.`;
})
