$(document).ready(function () {
    $('body').masonry({
        columnWidth: 10
    });
});

function on_M(num){
   var game = document.getElementById(num);
   game.src="img/icon"+num+"_red.PNG"
}
function leave_M(num){
    var game = document.getElementById(num);
    game.src="img/icon"+num+"_Black.PNG"
}