var blocks = $('.time-block');
var save = $('.saveBtn');
var clear = $('.btn-primary');

var currentDay = moment().format('dddd, MMM Do, YYYY');
$('#currentDay').text(currentDay);
//save button
$(document).ready(function () {
  save.on('click', function () {
    var hours = $(this).siblings('.description').val();
    var tasks = $(this).parent().attr('id');

    //save in local storage
    localStorage.setItem(tasks, hours);
  })
  //info from local storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


  //timeblocks for current day
  function timeTracker() {
    //current hour
    var currentTime = moment().hour();

    //loop
    blocks.each(function () {
      var currentBlock = parseInt($(this).attr('id').split('-')[1]);

      //past, present, future time background change
      if (currentBlock === currentTime) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');


      } else if (currentBlock < currentTime) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');

      } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');

      }

    });

  };

  //run again
  timeTracker();

});

//clear all info, everywhere
clear.click(function () {
  localStorage.clear();
  // $('#hour-9 .description').val(localStorage.getItem('hour-9')).clear();
  // $('#hour-10 .description').val(localStorage.getItem('hour-10')).clear();
  // $('#hour-11 .description').val(localStorage.getItem('hour-11')).clear();
  // $('#hour-12 .description').val(localStorage.getItem('hour-12')).clear();
  // $('#hour-13 .description').val(localStorage.getItem('hour-13')).clear();
  // $('#hour-14 .description').val(localStorage.getItem('hour-14')).clear();
  // $('#hour-15 .description').val(localStorage.getItem('hour-15')).clear();
  // $('#hour-16 .description').val(localStorage.getItem('hour-16')).clear();
  // $('#hour-17 .description').val(localStorage.getItem('hour-17')).clear();
  location.reload(true);

});