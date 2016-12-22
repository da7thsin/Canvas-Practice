var canvas = (function(){
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext('2d');

  //default dimensions
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  return {
    setDimension: function(width, height){
      canvas.width = width;
      canvas.height = height;
    },

    getDimension: function(){
      return {width: canvas.width, height: canvas.height};
    },

    draw: function(callback){
      callback(ctx);
    }
  }
})();

canvas.draw(function(ctx){
  
});
