var blocks = $('.time-block');
var save = $('.saveBtn');
var currentDay = moment().format('dddd, MMM Do, YYYY');
$('#currentDay').text(currentDay);

//timeblocks for current day
function timeTracker() {
  var currentTime = moment().hour();

  blocks.each(function () {
    var currentBlock = parseInt($(this).attr('id').split('hour')[1]);
    console.log(this)

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

  })

}

//save button
$(document).ready(function () {
  save.on('click', function () {
    var tasks = $(this).siblings('.description').val();
    var hours = $(this).parent().attr('id');

    //save in local storage
    localStorage.setItem(tasks, hours);
  })

})

//info from local storage
