$(document).ready(function(){
  $('.slider').bxSlider({
    auto: true,
    pause: 4000,
    speed: 2000
  });
});

$(document).ready(function(){
  var today = new Date();
  var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  document.querySelector('.date').innerHTML = today.toLocaleDateString('es-ES', options);
});