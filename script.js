var currentDay = moment().format('LL');
var currentTime = moment().format('LT');
var startDay = moment().startOf('hour');
var currentHour = currentTime.split(':')[0]
var allHours = ['9', '10', '11', '12', '1', '2', '3', '4', '5']
console.log(currentHour)
console.log('time', currentTime, typeof(currentTime))

// display current date
$("#currentDay").text(currentDay)
// display current time
$("#currentTime").text(currentTime)