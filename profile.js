function fadeIn() {
  $('img').fadeIn();
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
  $('img').fadeToggle(1);
  growHeading();
  setTimeout(shrinkHeading, 2500);
  $('.cuteness').on('click', fadeIn);
  $('id2').on('click', playMusic);
}

$(document).ready(setupHandlers);
