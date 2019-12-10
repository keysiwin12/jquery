$(document).ready(function () {
    $('.imagenes').on(('click'),'button' ,function (e) {
      console.log(e.currentTarget);
      let yo = e.currentTarget.dataset.v
     $('#yo').attr('src',`./assets/img/${yo}.png` );

    let op = ['tijera','papel','piedra'];
    opPC = op[Math.floor(Math.random() * 3)]
    $('#pc').attr('src',`./assets/img/${opPC}.png`); 

    function result(yo,op) {
      switch(yo) {
        case 'tijera' : switch(op) {
          case 'papel' : return true; break; 
        }
        break;
        case 'piedra' : switch(op) {
          case 'tijera' : return true; break;  
        }
        break;
        case 'papel' : switch(op) {
          case 'piedra' : return true; break;
        }
        break;
      }
    }
    let resp = result(yo,opPC);
    if(yo == opPC) {
      $('#resultado').text(`Empate  los dos escogieron ${yo}`);
    }else if(resp)
      $('#resultado').text(`Ganaste escogiste ${yo} contra ${opPC}`);
      else
        $('#resultado').text(`Perdiste escogiste ${yo} contra ${opPC}`);
    });

});