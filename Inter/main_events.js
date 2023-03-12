$(document).ready(function(){
  $('.slider').bxSlider({
    auto: true,
    pause: 4000,
    speed: 2000
  });
});

$(document).ready(function(){
  var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric', second:'numeric'};

  function updateTime() {
    var today = new Date();
    document.querySelector('.date').innerHTML = today.toLocaleDateString('es-ES', options);
  }

  updateTime(); // Actualiza la pantalla la primera vez

  setInterval(updateTime, 1000); // Actualiza la pantalla cada segundo
});