// get DOM elements from UI
const inputTemp = document.querySelector("#temp-decimal-input"),
      fromUnit = document.querySelector("#from-temp-units"), 
      toUnit = document.querySelector("#to-temp-units"), 
      convertBtn = document.querySelector("#convert-btn"),
      resultTxt = document.querySelector(".result-text");

function checkGetInput() {
    // if (
    //     (inputTemp.value.trim() !== "") &&
    //     (fromUnit.value !== "FU") &&
    //     (toUnit.value !== "TU")
    // ) {
    //     // console.log(false);
    //     convertBtn.disabled = false;
    // } else {
    //     // console.log(true);
    //     convertBtn.disabled = true;
    // }

    convertBtn.disabled = !(
        (inputTemp.value.trim() !== "") &&
        (fromUnit.value !== "FU") &&
        (toUnit.value !== "TU")
    );
}

inputTemp.addEventListener ("input", checkGetInput);
fromUnit.addEventListener ("change", checkGetInput);
toUnit.addEventListener ("change", checkGetInput);

checkGetInput();

function convertTemp() {
    const currentTemp = Number(inputTemp.value);
    // let convertTemp = 0;

    // // Convert Fahrenheit to Celsius
    // if (fromUnit.value === "F" && toUnit.value === "C") {
    //     convertTemp = (currentTemp - 32) * 5/9;
    // } 
    // // Convert Fahrenheit to Kelvin
    // else if (fromUnit.value === "F" && toUnit.value === "K") {
    //     convertTemp = (currentTemp - 32) * 5/9 + 273.15;
    // }
    // // Convert Fahrenheit to Fahrenheit
    // else if (fromUnit.value === "F" && toUnit.value === "F") {
    //     convertTemp = currentTemp;
    // }

    // // Convert Celsius to Fahrenheit
    // else if (fromUnit.value === "C" && toUnit.value === "F") {
    //     convertTemp = (currentTemp * (9/5)) + 32;
    // }
    // // Convert Celsius to Kelvin
    // else if (fromUnit.value === "C" && toUnit.value === "K") {
    //     convertTemp = (currentTemp + 273.15);
    // }
    // // Convert Celsius to Celsius
    // else if (fromUnit.value === "C" && toUnit.value === "C") {
    //     convertTemp = currentTemp;
    // }
    
    // // Convert Kelvin to Fahrenheit
    // else if (fromUnit.value === "K" && toUnit.value === "F") {
    //     convertTemp = (currentTemp - 273.15) * 9/5 +32;
    // }
    // // Convert Kelvin to Celsius
    // else if (fromUnit.value === "K" && toUnit.value === "C") {
    //     convertTemp = currentTemp - 273.15;
    // }
    // // Convert Kelvin to Kelvin
    // else {
    //     convertTemp = currentTemp
    // }

    let celsius = 0;
    if (fromUnit.value === "C") {
        celsius = currentTemp;
    } else if (fromUnit.value === "F") {
        celsius = (currentTemp -32) * 5 / 9;
    } else if (fromUnit.value === "K") {
        celsius = currentTemp - 273.15;
    }

    if (toUnit.value === "C") return celsius;
    if (toUnit.value === "F") return (celsius * 9 / 5) + 32;
    if (toUnit.value === "K") return celsius + 273.15;

    // return currentTemp;
    return celsius;
}

convertBtn.addEventListener("click", () => {
    const result = convertTemp();

    // A safe guard: if result si NaN, fallback to 0
    const safeResult = isNaN(result) ? 0 : result;
   
    // resultTxt.innerHTML or textContent
    // The result should be like this -> 34 Celsius is 93.2 Fahrenheit.
    resultTxt.textContent = `${inputTemp.value} ${fromUnit.options[fromUnit.selectedIndex].text} is ${safeResult.toFixed(2)} ${toUnit.options[toUnit.selectedIndex].text}.`;

    // console.log(result);
});
