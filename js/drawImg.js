window.onload=function(){
    draw();
    drawHld1();
    drawHld2()
    drawLine();
    drawHuLine();
    JiantouUp();
    JiantouDown();
}

function draw(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    //开始代码
    ctx.beginPath();
ctx.beginPath();
ctx.moveTo(10,150);           // 创建开始点
ctx.lineTo(150,150);          // 创建水平线
ctx.arcTo(200,150,200,90,50); // 创建弧
ctx.lineTo(200,10);         // 创建垂直线
ctx.stroke();    

ctx.beginPath();
ctx.moveTo(600,150);           // 创建开始点
ctx.lineTo(400,150);          // 创建水平线
ctx.arcTo(350,150,350,90,50); // 创建弧
ctx.lineTo(350,10);         // 创建垂直线
ctx.stroke();  

ctx.beginPath();
ctx.moveTo(10,300);           
ctx.lineTo(150,300);          
ctx.arcTo(200,300,200,390,50); 
ctx.lineTo(200,450);         
ctx.stroke();  
 
ctx.beginPath();
ctx.moveTo(600,300);           
ctx.lineTo(400,300);          
ctx.arcTo(350,300,350,390,50); 
ctx.lineTo(350,450);         
ctx.stroke();  


}

function drawLine(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10,220);
    ctx.lineTo(190,220);
    ctx.lineWidth = 2;//线条的宽度
    ctx.strokeStyle = "#ffff33";//线条的颜色
    ctx.stroke();//绘制

    ctx.beginPath();
    ctx.moveTo(600,220);
    ctx.lineTo(360,220);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffff33";
    ctx.stroke();
}

//虚线绘制
function drawHuLine(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.setLineDash([2,5]);
    ctx.beginPath();
    ctx.moveTo(190,160);
    ctx.lineTo(190,300);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#888888";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(360,160);
    ctx.lineTo(360,300);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#888888";
    ctx.stroke();

}

function drawHld1(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img,100,240,25,10);
        ctx.drawImage(img,100,260,25,10);
        ctx.drawImage(img,100,280,25,10);
    } 
    img.src = "./img/hld1.png";
}

function drawHld2(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img,450,160,25,10);
        ctx.drawImage(img,450,180,25,10);
        ctx.drawImage(img,450,200,25,10);
    } 
    img.src = "./img/hld3.png";
}

function JiantouUp(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img,185,145,10,10);
        ctx.drawImage(img,355,145,10,10);
    } 
    img.src = "./img/up.png";
}

function JiantouDown(){
    var canvas = document.getElementById('drawCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img,185,300,10,10);
        ctx.drawImage(img,355,300,10,10);
    } 
    img.src = "./img/down.png";
}