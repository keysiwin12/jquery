// before

$('#btn').on('click', function () {
    // $('li:first').before('<li>tres</li>');     //agregak
    //after
    // $('li:last').after('<li>tres</li>');

    //insert After

    // $('<li>tres</li>').insertAfter('#lista');

    //before after
    // $(target).insertBefore(selector);

    // $('#lista').append('hola como estan');
    // $('<li>hola<li/>').appendTo($('#lista'));
    $('#lista').prepend('<li>hola<li/>');


    // wrap

    //agregar contenedo a un conjunto de elementos

    $('p').wrap("<div></div>");

});



