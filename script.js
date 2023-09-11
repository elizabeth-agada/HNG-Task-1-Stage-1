// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to display the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
        return dayOfWeek;
    }

    // Function to display the current UTC time
    function getCurrentUTCTime() {
        const now = new Date();
        return now.getTime();
    }

    // Update the displayed values
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});
