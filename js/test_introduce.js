function fnMove(seq){
    var offset = $("#"+ seq).offset();
    $('html, body').animate({scrollTop : offset.top-30}, 600);

}
function next(){
    for(var i=0;i<50;i++){
        document.write("<br>");
    }
}

window.onload=function (){
    $('html, body').scrollTop(10)
}