$(document).ready(function () {
    $('button').on(('click'), function () {
        $.ajax({
            type: "get",
            url: "datos3.json",
            data: "data",
            dataType: "json",
            success: function (response) {
                console.log(response.empleados)
                $.each(response.empleados, function (i, empleado) { 
                     console.log(empleado.apellido);
                     
                });
            },
            
        });
    });
});