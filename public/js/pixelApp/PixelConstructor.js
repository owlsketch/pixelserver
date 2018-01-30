//basic pixel constructor
const Pixel = function(x=0,y=0, w=20, h=20, fill=[255,255,255]) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.fill = fill;
};

Pixel.prototype.updatePixelSize = function(x=this.x, y=this.y, w=this.w, h=this.h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

//draw pixel to ctx
Pixel.prototype.draw = function(ctx) {
  ctx.fillStyle = 'rgb(' + this.fill[0] + ',' + this.fill[1] + ',' + this.fill[2] + ')';
  //seems to have overlapping issues where a single pixel selects two different boxes
  ctx.fillRect(this.x, this.y, this.w, this.h);
  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
  ctx.strokeStyle = 'rgb(140,140,140)';
  ctx.strokeRect(this.x+0.5, this.y+0.5, this.w, this.h);
};

Pixel.prototype.drawHighlight = function(ctx) {
  ctx.fillStyle = 'rgba(200,200,200, .5)';
  ctx.fillRect(this.x + 1, this.y + 1, this.w - 1, this.h - 1);
};

//determine if mouse is currently within the bounds of the current pixel
Pixel.prototype.contains = function(mx,my) {
  if(mx >= this.x &&
    my >= this.y &&
    mx <= (this.x + this.w) &&
    my <= (this.y + this.h)) {
      return true;
  }
  else return false;
};

export default Pixel;
