$(document).ready(function () {
    $('button').on(('click'), function () {
        // alert('funcionando');
        // $.get("datos.txt",
        //     function (dato, textStatus, jqXHR) {
        //         console.log(dato);
        //         console.log(textStatus);
        //         console.log(jqXHR);
        //         console.log(jqXHR.status);
        //         $('.info').append(dato);
        //     },
        // );

        // $.get("datos.json",
        //     function (data, textStatus, jqXHR) {
        //         $('#nombre').append(data.nombre);
        //         $('#apellido').append(data.apellido);
        //         $('#edad').append(data.edad);
        //         $('#cursos').append(data.cursos);
        //     },
            
        // );

        $.getJSON("datos2.json", 
            function (data, textStatus, jqXHR) {
                if($('#nombre').empty()) {
                    $.each(data, function (i, persona) { 
                        $('#nombre').append('<li>'+persona.nombre + '</li>');
                        $('.nombre').append('<td>'+persona.nombre + '</td>');
                        
                     });
                }

               
            }
        );


    });
    
});



