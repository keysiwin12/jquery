$(document).ready(function () {
    

    $('.html').hover(function () {
            // over
            $('.html').css({color : 'blue' , fontSize : '20px'});
        }, function () {
            $('.html').css({color : 'black' , fontSize : '15px'});
        }        
    );

    $('.angular').hover(function () {
            $('.angular').css({color : 'red' , fontSize : '25px'});
            
        }, function () {
            $('.angular').css({color : 'black' , fontSize : '15px'});
        }
    );

    $('.css').hover(function () {
            // over
            $('.css').css({background : 'blue', color : 'white'});
            
        }, function () {
            // out
            $('.css').css({background : 'white',color : 'black'});
        }
    );

    $('#hide-java').click( () => { 
        $('.java').hide('100');
    });

    $('#show-java').click( () => {             
        $('.java').show('100');
    });

    $('#jquery').click( () => { 
        $('.jquery').css({});
    });
});