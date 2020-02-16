var fingers;
var song;
var zoom = 1.00;
var zMin = 0.05;
var zMax = 9.00;
var sensativity = 0.005;


function setup() {
     createCanvas(1400,600);
     imageMode(CENTER);
     
     fingers = createVideo(['720x480.mp4']);
     fingers.hide();
     song = loadSound('Untertitle.mp3');
    
    
}

function draw() {
 
  background(255);
  translate(width/2,height/2);
  scale(zoom);
  image(fingers,0,0,480,320);
  

}

function mouseWheel(event) {
  zoom += sensativity * event.delta;
  zoom = constrain(zoom, zMin, zMax);
  //uncomment to block page scrolling
  return false;
}

// plays or pauses the video depending on current state
function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255);
  } else {
    song.play();
    background(255);
  }
  
}

