var liMenu = [
  {
    content: 'Anonymous proxy',
    link: "#content-hero"
  },
  {
    content: 'Looking Through A Window',
    link: "#looking-window"
  },
  {
    content: '3 Reasons To Purchase',
    link: "#reasons-box"
  }
];

var ul = document.querySelector('.ul');
var listLi = '';
for (var i = 0; i < liMenu.length; i++) {
  listLi += '<li class="item"><a href="' + liMenu[i].link +'">' + liMenu[i].content+ '</a></li>';
}
ul.innerHTML += listLi;

// MENÚ DESPLEGABLE

// Abrir menú

var buttonMenu = document.querySelector('.btn-menu');
var contentMenu = document.querySelector('.content-menu');

function showMenu() {
  contentMenu.classList.remove('hidden');
}
buttonMenu.addEventListener('click', showMenu);

// Cerrar menú con botón close

var buttonClose = document.querySelector('.btn-close');
function closeMenu() {
  contentMenu.classList.add('hidden');
}
buttonClose.addEventListener('click', closeMenu);

// Cerrar menú al pinchar sobre cada elemento de la lista

var arrayLiMenu = document.querySelectorAll('.item a');
for (var i = 0; i < arrayLiMenu.length; i++) {
  arrayLiMenu[i].addEventListener('click', closeMenu);
}



// PETICIÓN AJAX



var request;
var buttonMore = document.querySelector('.more');
buttonMore.addEventListener('click', loadReasons);


function loadReasons() {
  request = new XMLHttpRequest();
  request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
  request.addEventListener('load', printReasons);

  function  printReasons() {
    var response = request.responseText;
    var arrayReasons = JSON.parse(response).reasons;
    var listReasons = '';
    for (var i = 0; i < arrayReasons.length; i++) {
      listReasons += '<div class="reasons"><h3 class="title-reason">'
      + arrayReasons[i].title +
      '</h3><p class="paragraph reason">'
      + arrayReasons[i].description +
      '</p></div>';
    }
    var colsReasons = document.querySelector('.cols-reasons');
    colsReasons.innerHTML += listReasons;
  }
  request.send();
}

// FUNCIÓN SMOOTH SCROLL (JQUERY)

/*Con el símbolo $ se seleccionan los enlaces (a) de forma que al hacer 'click' en uno de ellos se ejecuta la función anónima que realiza las animaciones de scroll usando el método animate(). La propiedad que se anima es scrollTop. Queremos que el scroll se situe en la posición a la que te lleva el ancla del enlace.

Por lo que tendremos que seleccionar con this el valor del atributo (href) del enlace sobre el que hemos hecho click.

El método offset().top nos devuelve la posición en la que se encuentra el elemento seleccionado.

El valor de dicha posición será el que asignaremos a la propiedad scrollTop.

Y dicha función moverá el HTML y body hasta la posición en 1.5 segundos.*/


$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1500);
  return false;
});
