/**
 * Created by zhoufei on 2015/12/23.
 */
var
    canvas = document.getElementById('test-shape-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0,0,200,200);//������0,0��λ�ô�СΪ200*200�ľ��Σ�Ҳ���ǽ��������Ϊ͸��
ctx.fillStyle = '#dddddd';
ctx.fillRect(10,10,130,130);//����10,10��λ�ô�СΪ130*130�ľ���Ϳɫ
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