/**
 * Created by zhoufei on 2015/12/23.
 */
var
    canvas = document.getElementById('test-shape-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0,0,200,200);//擦除（0,0）位置大小为200*200的矩形，也就是将该区域变为透明
ctx.fillStyle = '#dddddd';
ctx.fillRect(10,10,130,130);//将（10,10）位置大小为130*130的矩形涂色
var path = new Path2D();
path.arc(75,75,50,0,Math.PI*2,true);
path.moveTo(110,75);
path.arc(75,75,35,0,Math.PI*2,false);
path.moveTo(65,65);
path.arc(60,65,5,0,Math.PI*2,true);
path.moveTo(95,65);
path.arc(90,65,5,0,Math.PI*2,true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);