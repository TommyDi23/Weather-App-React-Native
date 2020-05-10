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

// const dayOrNight = currentTime => {
//   const hours = parseInt(currentTime.toUTCString().slice(-12, -7));
//   if (hours >= 18 && hours <= 4) return true;
// };


module.exports = { dateFormatter, kelvinToCelsius };
