var recX=0;
var recY=0;
var keydown;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        setInterval(function(){
            if(recX < 400) {
                recX+= 5;
                recY+= 5;
            }
            else {
                recX = -50;
                recY = -50;
            }
            
            rand = randomNumber(150,150)
            ctx.clearRect(0,0,400,400)
            ctx.fillRect(parseInt(rand), parseInt(rand),50, 50)
            console.log(parseInt(rand))
        }, 30)
    }
}