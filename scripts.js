$(function() {
  $.getJSON('events.json', function(data) {

    $.each(data.events, function(i, e) {
      var buttonValue  = (e.seatsAvailable > 0 ) ? 'book':'sold';

      var profileData = "<div class='event__item'>" +
        "<h2 class='event__name'>"+  e.eventName + "</h2>" +
        "<div class='event__details'>" +
        "<div class='event__image'>" + "<img src='./images/event.jpg'/>" + "</div>" +
        "<div class='event__info'>" +
        "<div class='event__date'>" + e.eventDate + "</div>" +
        "<div class='event__seat'>" + "Seats Available:" +
        "<span class='event__seat--value'>" + e.seatsAvailable + "</span>" +
        "</div>" +
        "<a href='book-now.html?data=name="+ e.eventName +"&seats="+ e.seatsAvailable +"'  class='book-now " + buttonValue +"'> " +
        "<span class='event__book'>" + buttonValue + " </span>" +
        "</a>" +
        "</div>" +
        "</div>"  +
        "</div>"
      $(profileData).appendTo(".event__list");

    });
  });
});

$(function() {
  $("#searchBox").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#data .event__item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// parse your data in the destination page
$(function() {
  url = window.location.href;
  queryString = url.split('data=').pop();
  var params = {}, queries, temp, i, l;
  // Split into key/value pairs
  queries = queryString.split("&");
  // Convert the array of strings into an object
  if(queries) {
    for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=');
      var data = "<span class='event__seat--value'>" + temp[1] + "</span>";
      $(data).appendTo(".booking__wrapper");
    }
  }
});


