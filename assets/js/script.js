var blocks = $('.time-block');
var save = $('.saveBtn');
var hour9 = $('#hourNine');
var hour10 = $('#hourTen');
var hour11 = $('#hourEleven');
var hour12 = $('#hourTwelwe');
var hour1 = $('#hourOne');
var hour2 = $('#hourTwo');
var hour3 = $('#hourThree');
var hour4 = $('#hourFour');
var hour5 = $('#hourFive');


var currentDay = moment().format('dddd, MMM Do, YYYY');
$('#currentDay').text(currentDay);
//save button
$(document).ready(function () {
  save.on('click', function () {
    var tasks = $(this).siblings('.description').val();
    var hours = $(this).parent().attr('id');
    console.log($(this))

    //save in local storage
    localStorage.setItem(tasks, hours);
  })
  //info from local storage
  hour9.val(localStorage.getItem('hourNine'));
  hour10.val(localStorage.getItem('hourTen'))
  console.log(hour9)

  //timeblocks for current day
  function timeTracker() {
    var currentTime = moment().hour();
    console.log(currentTime);

    blocks.each(function () {
      var currentBlock = parseInt($(this).attr('id').split('hour')[1]);
      console.log($('this'));
      console.log(currentBlock)

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

  timeTracker();

})