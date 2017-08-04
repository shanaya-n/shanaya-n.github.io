function fadeIn() {
  $('#hamster').fadeIn();
  $('#dogImage').fadeIn();
}
function playMusic() {

}
function growHeading() {
  $('h1').animate({fontSize:'80px'}, 2000);
}
function shrinkHeading() {
  $('h1').animate({fontSize:'35px'}, 2000);
}
function setupHandlers() {
  $('#hamster').fadeToggle(1);
  $('#dogImage').fadeToggle(1);
  growHeading();
  setTimeout(shrinkHeading, 2500);
  $('.cuteness').on('click', fadeIn);
  $('id2').on('click', playMusic);
}

$(document).ready(setupHandlers);

// timeline
$(".timeline-wrapper .timeline-content-item > span").on("mouseenter mouseleave", function(e){
  $(".timeline-wrapper .timeline-content-item.active").removeClass("active");
  $(this).parent().addClass("active");
});
