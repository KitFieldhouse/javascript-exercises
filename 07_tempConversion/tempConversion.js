const convertToCelsius = function(f) {

  return +((5/9)*(f - 32)).toFixed(1);

};

const convertToFahrenheit = function(c) {

  return +(c*9/5 + 32).toFixed(1)

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
