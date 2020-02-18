var song;
var button;


function setup() {
  createCanvas(1000,700);
  background(255, 0, 0);
  button = createButton('play');
  button.mousePressed(toggleVid); 
  button.position(500,10);
  button.size(80,40);// attach button listener
 button.style("background-color","#fff");
 button.style("color","#f00");
 button.style('font-size', '20px');

}

function preload(){
 soundFormats('mp3');
 song = loadSound('Untertitle.mp3');
 

   
}


function toggleVid() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    button.html('play');
  } else {
    song.play();
   button.html('pause');
  }
}