$(document).ready(function () {
    
  $('#botones').on('click', 'button', function (e) {
    console.log(e.target.id);
    $(`.${e.target.id}`)[0].pause();
    $(`.${e.target.id}`)[0].currentTime=0;
    $(`.${e.target.id}`)[0].play();
  });


  
//   $(document).keydown(function () { 
//     console.log(event.which);
//     if(event.which > 67 && event.which < 77 &&  !(event.which == 69 || event.which == 73))  {

//         $(`audio[data-v=${event.key}]`)[0].pause();
//         $(`audio[data-v=${event.key}]`)[0].currentTime=0;
//         $(`audio[data-v=${event.key}]`)[0].play();
//     }
// });


});

let s = document.getElementsByTagName('audio');
console.log(s[1]);
document.addEventListener('keypress' ,function(e) {
        console.log(event.which);
        $(`audio[data-v=${event.key}]`)[0].pause();
        $(`audio[data-v=${event.key}]`)[0].currentTime=0;
        $(`audio[data-v=${event.key}]`)[0].play();
});



console.log(s[1].dataset.v)


















// function sonido(nota) {
//     s = document.getElementsByClassName(nota);
//     s.addEventListener
//     document.getElementsByClassName(nota)[0].pause();
//     document.getElementsByClassName(nota)[0].currentTime=0;
//     document.getElementsByClassName(nota)[0].play();
// }

