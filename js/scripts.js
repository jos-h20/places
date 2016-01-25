function place(area, landmark, date) {
  this.area = area;
  this.landmark = landmark;
  this.date = date;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedDate = $("input#new-time").val();

    $("ul#places").append("<li><span class='location'>" + inputtedLocation + "</span></li>");
// debugger;
    $("#places").last().click(function() {
      $("#show-place").show();
      $(".location").text(inputtedLocation);
      $(".landmark").text(inputtedLandmark);
      $(".time").text(inputtedDate);
    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
  });
});
