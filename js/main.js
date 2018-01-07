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
