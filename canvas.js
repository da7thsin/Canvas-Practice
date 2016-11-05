var canvas = $('canvas')[0];
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var circles = []

function randomSpeed(){
  return 1 + Math.random() * 3;
}

function randomSign(){
  return Math.random() > 0.5?1:-1;
}

function randomCircleElements(){
  circles = [];
  for(var i = 0; i < Math.floor(2 + (Math.random()* 10)); i++){
    circles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      speedX: randomSpeed() * randomSign(),
      speedY: randomSpeed() * randomSign(),
      size: 10 + Math.random() * 10
    });
  }
}

function draw(){
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0,0,width,height);

  circles.forEach(function(circle){
    circle.x += circle.speedX;
    circle.y += circle.speedY;
    if(circle.x > width){
      circle.speedX = -randomSpeed();
    }

    if(circle.y > height){
      circle.speedY = -randomSpeed();
    }

    if(circle.x < 0){
      circle.speedX = randomSpeed();
    }

    if(circle.y < 0){
      circle.speedY = randomSpeed();
    }

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0 , Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

$(document).ready(function(){
  $('button').click(function(){
    randomCircleElements();
  })
  draw();
});
