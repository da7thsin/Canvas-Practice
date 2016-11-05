var canvas = $('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var width = canvas.width;
var height = canvas.height;
var circles = [];
var colors = ['#178359','#4DD29E','#E05206','#B213B6','#37D1DD'];

function randomCircleElements(num){
  for(var i = 0; i < num; i++){
    circles.push({
      x: random(width),
      y: random(height),
      speedX: random(7,2) * randomSign(),
      speedY: random(7,2) * randomSign(),
      size: random(30,3),
      color: 'rgba('+random(255)+','+random(255)+','+random(255)+','+Math.random()+')'
    });
  }
}

function randomSign(){
  return Math.random() > 0.5?1:-1;
}

function random(num,def){
  return !def?Math.floor(Math.random() * num):def + Math.floor(Math.random() * num);
}

function draw(){
  ctx.clearRect(0,0,width,height);

  circles.forEach(function(circle){
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    if(circle.x > width){
      circle.speedX = -random(7,1);
      circle.color = 'rgba('+random(255)+','+random(255)+','+random(255)+','+Math.random()+')'
    }

    if(circle.y > height){
      circle.speedY = -random(7,1);
      circle.color = 'rgba('+random(255)+','+random(255)+','+random(255)+','+Math.random()+')'
    }

    if(circle.x < 0){
      circle.speedX = random(7,1);
      circle.color = 'rgba('+random(255)+','+random(255)+','+random(255)+','+Math.random()+')'
    }

    if(circle.y < 0){
      circle.speedY = random(7,1);
      circle.color = 'rgba('+random(255)+','+random(255)+','+random(255)+','+Math.random()+')'
    }

    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}


$(document).ready(function(){
  $(document).click(function(){
    circles = [];
    randomCircleElements(random(50,10));
  })
  randomCircleElements(random(50,10));
  draw();
});
