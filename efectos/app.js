$(document).ready(function () {

    // Aparece y desaparece con efecto de opacidad
    // $(selector).fadeIn('slow');    //slow - fast   o en valor 1531,100,2000
    // $('#aparecer').click(function () { 
    //     $('#parrafo').fadeIn('slow');

    // });

    // $('#desaparecer').click(function () { 
    //     $('#parrafo').fadeOut(3000);
    // });

    $('#aparecer').click(function (e) { 
        $('#parrafo').slideDown();
    });

    $('#desaparecer').click(function (e) { 
        $('#parrafo').slideUp();
        
    });

    $('#togle').click(function (e) { 
        $('#parrafo').toggle(1000);
    });

});