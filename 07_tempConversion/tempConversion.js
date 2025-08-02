const convertToCelsius = function(fahrenheit) {
  temp = (fahrenheit - 32) * 5 / 9;
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  temp = celsius * 9 / 5 + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
