const ViewState = function(canvasWrapper, canvas, touches) {
  /******* setup **********/
  let state = this;
  this.view = canvasWrapper;
  this.id = this.view.id;
  this.child = canvas;
  this.touches = touches;

  /****** Events *****/
  /******* Touch Events *******/
  //Here need to handle touch events for pinch/zoom the canvas and two-finger drag
  this.view.addEventListener('touchstart', function(e) {state.touches.Handler(e, state);});
  this.view.addEventListener('touchend', function(e) {state.touches.Handler(e, state);});
};

export default ViewState;
