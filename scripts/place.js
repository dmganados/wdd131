document.addEventListener("DOMContentLoaded", function () {
    const temperature = 29;
    const windSpeed = 15;

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    function displayWindChill() {
        const windChillElement = document.querySelector(".weather ul li:last-child");

        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill.toFixed(2)}°C`;
        } else {
            windChillElement.innerHTML = "<strong>Wind Chill:</strong> N/A";
        }
    }

    displayWindChill();
})