$(".thumbnail-container").click(function(e) {
  // move the selection guide from the previously selected to the new selected thumbnail
  $(".thumbnail-container .selector").removeClass("active");
  $(this).children('.selector').addClass("active");

  // get the index of clicked thumbnail, add 'selected' class to viewer side 
  // to toggle display
  var logoIndex = $(this).index();
  $(".logo-view").removeClass("selected");
  $(`.logo-view:nth-child(${logoIndex + 1})`).addClass("selected");
});