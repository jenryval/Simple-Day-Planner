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

$('.saveBtn').on('click', function (event) {
    event.preventDefault()
    var nine = $('#nine').val();
    var ten = $('#ten').val();
    var eleven = $('#eleven').val();
    var twelve = $('#twelve').val();
    var one = $('#one').val();
    var two = $('#two').val();
    var three = $('#three').val();
    var four = $('#four').val();
    var five = $('#five').val();

    localStorage.setItem('9AM', nine);
    localStorage.setItem('10AM', ten);
    localStorage.setItem('11AM', eleven);
    localStorage.setItem('12PM', twelve);
    localStorage.setItem('1PM', one);
    localStorage.setItem('2PM', two);
    localStorage.setItem('3PM', three);
    localStorage.setItem('4PM', four);
    localStorage.setItem('5PM', five);
});