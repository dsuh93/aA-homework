document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById('mycanvas');
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(150, 200, 50, 60);

    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = 'purple';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(175, 150, 10, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = 'teal';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 100, 20, 0, 2*Math.PI, true);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = 'purple';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(150, 75);
    ctx.lineTo(50, 75);
    ctx.fill();
    ctx.fillStyle = 'green';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(300, 75);
    ctx.lineTo(200, 75);
    ctx.fill();
    ctx.fillStyle = 'green';
    ctx.fill();


});
