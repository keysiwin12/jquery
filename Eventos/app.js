$(document).ready(function () {

    $('#boton1').click( () => { 
        
        // alert("Estoy funcionando");
        $('.h2-hide').hide('5');
    });
    
    $('#boton2').click( () => { 
        
        $('.h2-hide').show('5');
    });

    // mouseEventer

    $('.parrafo').mouseenter( () => { 
        $('.parrafo').css({fontSize : '30px'});
    });

    //mouseleave

    $('.parrafo').mouseleave( () => { 
        $('.parrafo').css({fontSize : '10px'});
    });


    //hover
    
    $('.h3-hover').hover(function () {
            // over
            $('.h3-hover').css({background : 'blue', color : 'white'});
        }, function () {
            // out
            $('.h3-hover').css( {background : 'red'});
        }
    );

    //keyup
    $('input').keyup(function (e) { 
        let valor = $('input').val();
        $('.p').html(valor);  //htmlget
    });
    

    
});