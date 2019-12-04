$(document).ready(function () {

    $('.imagenes').on(('click'),'button' ,function (e) {
      console.log(e.target.id);
      // $('#yo').append(e.target.src);
   
     $('#yo').attr('src', e.target.src);

    let op = ['tijera','papel','piedra'];
    opPC = op[Math.floor(Math.random() * 3)]
    $('#pc').attr('src',`./assets/img/${opPC}.png`);  
    
    switch(e.target.id) {
      case 'tijera' : switch(opPC) {
        case 'papel' : console.log('tu ganas escogiendo tijera contra papel');
      }
    }

    });
});