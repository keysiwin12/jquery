
$('#btn-red').click( () =>{ 

    $('.caja').removeClass('verde azul').addClass('rojo');
});

$('#btn-green').click(function (e) { 

    $('.caja').removeClass('rojo azul').addClass('verde');
});


$('#btn-blue').click(function (e) { 

    $('.caja').removeClass('rojo verde').addClass('azul');

});


$(selector).on(events, function () {
    
});
