function updateTimeAndDay(){
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
]
    const now= new Date();
    const currentDay = daysOfWeek[now.getUTCDay()]
    const currentUTC = now.toUTCString();

    const dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayElement.textContent = `Current Day : ${currentDay}`;
    timeElement.textContent = `Current UTC Time : ${currentUTC}`;

}   

updateTimeAndDay();