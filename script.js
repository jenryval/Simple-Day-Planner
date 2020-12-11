// variables
var currentDay = moment().format('LL');
var currentTime = moment().format('LT');
var startDay = moment().startOf('hour');
var currentHour = currentTime.split(':')[0]
var allHours = ['9', '10', '11', '12', '1', '2', '3', '4', '5']
console.log(currentHour)
console.log('time', currentTime, typeof(currentTime))

// current date and time display 
$("#currentDay").text(currentDay)
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

$('#nine').val(localStorage.getItem('9AM'))
$('#ten').val(localStorage.getItem('10AM'))
$('#eleven').val(localStorage.getItem('11AM'))
$('#twelve').val(localStorage.getItem('12PM'))
$('#one').val(localStorage.getItem('1PM'))
$('#two').val(localStorage.getItem('2PM'))
$('#three').val(localStorage.getItem('3PM'))
$('#four').val(localStorage.getItem('4PM'))
$('#five').val(localStorage.getItem('5PM'))



