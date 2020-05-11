const dateFormatter = unixTimestamp => {
  if (!unixTimestamp) {
    return "";
  }
  const dateObj = new Date(unixTimestamp * 1000);
  const utcString = dateObj.toUTCString();
  return utcString.slice(-12, -7);
};

const kelvinToCelsius = kelvinTemp => {
  const celsius = kelvinTemp - 273.15;
  return celsius.toFixed().toString();
};

module.exports = { dateFormatter, kelvinToCelsius };
