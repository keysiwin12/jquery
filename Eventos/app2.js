



$('p').on(function () { 
    alert('Hola como estan');
    
});

$('#evento').on('click', function (e) {
    console.log(e.target);                                  // target -- el elemento que esta escuchando el evento
});

$('#enlace').on('click', function (e) {
    e.preventDefault();                                                 // prevenir efectos del navegador
    $('div').css( { background : 'black'});
});


// propagacion
$('#hijo').on('click' , function (e) { 
    e.stopPropagation();                // detiene la propagacion
    console.log("esta escuchando el hijo")
 });

 $('#padre').on('click' , function() {
    console.log("esta ecuchando el padre")
 });

// delegacion

$('#padre-botones').on('click', 'button', function () {         //delega a los botonones
    alert('funcionando');
});


//trigger

$( "#foo" ).on( "mouseenter", function() {
    $( this ).text('h') ;
  });
  $( "#foo" ).trigger( "mouseenter" );











