
var beg = document.getElementById("canvas");
var ctx = beg.getContext ("2d");
var click = 0;
function clicker (){
    click++;
    ctx.clearRect(0,0,beg.width, beg.height);
    ctx.fillText("Count of clickers   " + click + " " , 100, 100);
    ctx.font="30px Verdana";
    console.log(click);
}
function colorchange(color){
    var v = document.getElementById('get');
    v.style.color = color;
}
