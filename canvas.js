var canvas = (function(){
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  function setDimension(w, h){
    ctx.canvas.width = w;
    ctx.canvas.height = h;
  }

  function getDimension(){
    return {width: ctx.canvas.width, height: ctx.canvas.height};
  }

  function clearCanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  function draw(callback){
    clearCanvas();
    callback(ctx);
  }

  return {
    setDimension: setDimension,
    getDimension: getDimension,
    draw: draw
  }
})();



// FRACTAL TREE
// canvas.draw(function(ctx){
//   var angle = Math.PI/4;
//   ctx.fillStyle = "tomato";
//
//   function tree(len){
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     ctx.lineTo(0, -len);
//     ctx.stroke();
//     ctx.translate(0, -len);
//
//     if(len > 5){
//       ctx.save();
//       ctx.rotate(angle * Math.random());
//       tree(len * 0.67);
//       ctx.restore();
//
//       ctx.save();
//       ctx.rotate(-angle * Math.random());
//       tree(len * 0.67);
//       ctx.restore();
//     }
//     else{
//       ctx.fillRect(-2.5, -2.5, 5, 5);
//     }
//
//   }
//
//   ctx.translate(ctx.canvas.width/2, ctx.canvas.height);
//   tree(200);
// });


// SPRITE ANIMATION USING DRAWIMAGE()
// canvas.draw(function(ctx){
//   var img = document.createElement('img');
//   img.src = 'test.png';
//
//   var spriteWidth = 119;
//   var spriteHeight = 153;
//
//   img.addEventListener('load', function(){
//     var cycle = 0;
//
//     setInterval(function(){
//       ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//       ctx.drawImage(img, cycle * spriteWidth, 0, spriteWidth, spriteHeight, 50, 50, spriteWidth, spriteHeight);
//
//       cycle = (cycle + 1) % 10;
//     }, 100);
//
//   });
// });


//PIE CHART USING ARC();
// canvas.draw(function(ctx){
//   var results = [
//     {name: "Satisfied", count: 1043, color: "#999"},
//     {name: "Neutral", count: 563, color: "#aaa"},
//     {name: "Unsatisfied", count: 510, color: "#bbb"},
//     {name: "No comment", count: 175, color: "#ccc"}
//   ];
//
//   var total = results.reduce(function(sum, choice){
//     return sum + choice.count;
//   }, 0);
//
//   var startAngle = 0;
//
//
//   results.forEach(function(result){
//     var portion = (result.count/total) * Math.PI * 2;
//
//     ctx.beginPath();
//     ctx.arc(150, 150, 100, startAngle, startAngle + portion);
//     ctx.lineTo(150, 150);
//
//     ctx.fillStyle = result.color;
//     ctx.fill();
//
//     startAngle += portion;
//   });
//
// });
