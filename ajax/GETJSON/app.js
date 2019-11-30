$(document).ready(function () {
    
    $('button').on(('click'), function () {
        $.getJSON("datos3.json",
            function (data, textStatus, jqXHR) {
                console.log(data);
                console.log(data.empleados);
                if($('.nombre').empty() && $('.apellido').empty()) {
                    $.each(data.empleados, function (i, empleado) { 
                            $('.nombre').append('<li>' + empleado.nombre + '</li>');
                            $('.apellido').append('<li>' + empleado.apellido + '</li>');      
                    });
                }

                $.ajax({
                    type: "method",
                    url: "url",
                    data: "data",
                    dataType: "dataType",
                    success: function (response) {
                        
                    }
                });
               


            }
        );
    });
});