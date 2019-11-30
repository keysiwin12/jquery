$(document).ready(function () {
    // animate :::>({propiedad de css},velocidad,colback)

    $('#animar').on('click', function () {
        $('div').animate({fontSize : '100px'},2000,function () {
            $('div').css({color : 'blue'});
          })
    });

});