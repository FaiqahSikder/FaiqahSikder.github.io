timeElement = document.querySelector(".time-input");
dateElement=document.querySelector(".date-input");
let weekdays = new Array(
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
)
timeElement.addEventListener("input", function(event) {
    let date=dateElement.valueAsDate;
    let n=date.getUTCDay();
    let dayOfWeek=weekdays[n];
    if (dayOfWeek == "Sunday") {
        timeElement.min = "10:00:00";
        timeElement.max = "16:00:00";
    } else if (dayOfWeek == "Saturday") {
        timeElement.min = "09:30:00";
        timeElement.max = "17:00:00";
    } else {
        timeElement.min = "09:00:00";
        timeElement.max = "18:00:00";
    }
})