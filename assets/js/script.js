$(document).ready(function () {

  function saveEvent() {
    $(".saveBtn").on("click", function () {
        var saveBtn = document.querySelector(".saveBtn");
        saveBtn.addEventListener("click", saveEvent);
        var eventTime = $(this).parent().attr("id"); 
        var eventName = $(this).siblings(".description").val(); 
        localStorage.setItem(eventTime, eventName);
    })
  };

  function colorCoding() {
    var currentHour = dayjs().format("H");
    $(".time-block").each(function () {
        let schedule = parseInt(this.id);
        if (schedule > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else if (schedule < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    })
};

  function printEvent() {
    $(".time-block").on("click", function () {
        var eventTime = $(this).attr("id"); 
        var eventName = $(this).children(".description").val();
        var blockID = $(this).attr("id")
        var blockTextArea = $(this).children(".description")
        blockID = localStorage.getItem(eventTime);
        blockTextArea.textContent = eventName;
    })
};

function dateTime() {
  var currentDate = dayjs().format("dddd, MMMM D, YYYY"); 
  var currentTime = dayjs().format("hh:mm A"); 
  showDate = $("#currentDay").text(currentDate);
  showTime = $("#currentTime").text(currentTime);
};

  // CALL ALL FUNCTIONS
  dateTime();
  setInterval(dateTime, 1000);
  colorCoding();
  printEvent();
  saveEvent();
  $(".time-block").each(function () {
    var eventTime = $(this).attr("id");
    var eventName = localStorage.getItem(eventTime);
    $(this).children(".description").val(eventName);
  });
});
