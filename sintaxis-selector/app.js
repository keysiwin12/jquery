$(document).ready(function() {
    console.log("Funcionando");

    // $('h1').hide();             //sintaxis 
    // $('h1').show();             // selector ::>action

    // selectores

    // document.querySelector('.dia') ... vanilla.js
    $('h3').css({color : 'blue'});          //jquery

    // por clase
    $('.dia').css({color: 'red'});

    // por id
    $('#soyId').css({background : 'black', color : 'white'});
    
    //first
    $('h4:first').css({background : 'blue'});

    //last
    $('h4:last').css({background : 'yellow'});
});