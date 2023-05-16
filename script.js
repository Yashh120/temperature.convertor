// script.js
var selectedScale = "Celsius";

function selectScale(scale) {
  selectedScale = scale;
  document.getElementById("scaleBtn").textContent = scale;
}

function convertTemperature() {
  var temperatureInput = document.getElementById("temperature");
  var result = document.getElementById("result");

  var temperatureValue = parseFloat(temperatureInput.value);

  if (!isNaN(temperatureValue)) {
    if (selectedScale === "Celsius") {
      var fahrenheitResult = (temperatureValue * 9 / 5) + 32;
      result.textContent = `${temperatureValue}°C = ${fahrenheitResult.toFixed(2)}°F`;
    } else if (selectedScale === "Fahrenheit") {
      var celsiusResult = (temperatureValue - 32) * 5 / 9;
      result.textContent = `${temperatureValue}°F = ${celsiusResult.toFixed(2)}°C`;
    }
    clearInputFields();
  } else {
    result.textContent = "Invalid input. Please enter a valid temperature.";
  }
}

function clearInputFields() {
  document.getElementById("temperature").value = "";
}
