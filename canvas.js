var canvas = $('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var width = canvas.width;
var height = canvas.height;
var circles = [];
var colors = ['#178359','#4DD29E','#37D1DD','#33E8EF','#2B1975','#F3C912'];

function randomCircleElements(num){
  for(var i = 0; i < num; i++){
    circles.push({
      x: random(width),
      y: random(height),
      speedX: random(7,2) * randomSign(),
      speedY: random(7,2) * randomSign(),
      size: random(30,5),
      color: colors[random(colors.length)]
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
      circle.color = colors[random(colors.length)];
    }

    if(circle.y > height){
      circle.speedY = -random(7,1);
      circle.color = colors[random(colors.length)];
    }

    if(circle.x < 0){
      circle.speedX = random(7,1);
      circle.color = colors[random(colors.length)];
    }

    if(circle.y < 0){
      circle.speedY = random(7,1);
      circle.color = colors[random(colors.length)];
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
    randomCircleElements(random(100,25));
  })
  randomCircleElements(random(100,25));
  draw();
});
