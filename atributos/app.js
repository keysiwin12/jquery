

let atributo1 = $('input').attr('type','text');
console.log(atributo1);

$('#add').click(function (e) { 
    
    // alert("funcionando");
    $('.caja').addClass('contenido');
});



$('#remove').click(function () {

    $('.caja').removeClass('contenido');
});


