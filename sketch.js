var playing = false;
var vid;
var button;
var zoom = 1.00;
var zMin = 0.05;
var zMax = 9.00;
var sensativity = 0.005;
var _self;

function setup() {
  createCanvas(1400,700);
  // specify multiple formats for different browsers
  imageMode(CENTER);
  vid = createVideo(['1920.mp4']);
 vid.hide();
  button = createButton("Sound");
 button.mousePressed(LinkClik);
 button.position(700,10);
 button.size(80,40);
 button.style("background-color","#fff");
 button.style("color","#f00");
 button.style('font-size', '20px');
  
  button = createButton('play');
  button.mousePressed(toggleVid); 
  button.position(600,10);
  button.size(80,40);// attach button listener
 button.style("background-color","#fff");
 button.style("color","#f00");
 button.style('font-size', '20px');

}

function draw() {
 
  background(255);
  translate(width/2,height/2);
  scale(zoom);
  image(vid,50,0,100,100);
  }
  
  function mouseWheel(event) {
  zoom += sensativity * event.delta;
  zoom = constrain(zoom, zMin, zMax);
  //uncomment to block page scrolling
  return false;
}

function LinkClik(){
 window.open("sound.html", _self);
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    vid.pause();
    button.html('play');
  } else {
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
}


