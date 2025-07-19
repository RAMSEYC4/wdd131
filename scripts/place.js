const currentYear = new Date().getFullYear()
const lastModified = new Date(document.lastModified)

document.querySelector('#currentyear')
  .innerHTML = `©${currentYear} Cedou Ramsey Pretoria Drc Congo`

document.querySelector('#lastModified')
  .innerHTML = `Last Modification: ${lastModified.toLocaleDateString()}`



const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, windSpeed) {
  // Check if wind chill can be calculated
  if (temp <= 10 && windSpeed > 4.8) {
    // Simple wind chill formula for Celsius and km/h
    return Math.round(temp - (windSpeed / 4));
  } else {
    return "N/A";
  }
}
const windChillResult = calculateWindChill(temperature, windSpeed);
document.querySelector('#windchill').innerHTML = windChillResult;