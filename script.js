// CONSTANTS

var RADIUS = 500;

var SOUNDS = {
  "q": "sounds/bubbles.mp3",
  "w": "sounds/clay.mp3",
  "e": "sounds/confetti.mp3",
  "r": "sounds/corona.mp3",
  "t": "sounds/dotted-spiral.mp3",
  "y": "sounds/flash-1.mp3",
  "u": "sounds/flash-2.mp3",
  "i": "sounds/flash-3.mp3",
  "o": "sounds/glimmer.mp3",
  "p": "sounds/moon.mp3",
  "a": "sounds/pinwheel.mp3",
  "s": "sounds/piston-1.mp3",
  "d": "sounds/piston-2.mp3",
  "f": "sounds/piston-3.mp3",
  "g": "sounds/prism-1.mp3",
  "h": "sounds/prism-2.mp3",
  "j": "sounds/prism-3.mp3",
  "k": "sounds/splits.mp3",
  "l": "sounds/squiggle.mp3",
  "z": "sounds/strike.mp3",
  "x": "sounds/suspension.mp3",
  "c": "sounds/timer.mp3",
  "v": "sounds/ufo.mp3",
  "b": "sounds/veil.mp3",
  "n": "sounds/wipe.mp3",
  "m": "sounds/zig-zag.mp3"
};

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  addRandomCircle();
  var soundPath = SOUNDS[event.key];
  playSoundFromPath(soundPath);
}

function onFrame(event) {
  circles.forEach(function(element) {
    element.fillColor.hue += 1;
    element.scale(0.90);
  });
  removeInvisibleCircles();
}

// FUNCTIONS

function addRandomCircle() {
  var circle = new Path.Circle(getRandomPointInView(), RADIUS);
  circle.fillColor = "purple";
  circles.push(circle);
}

function getRandomPointInView() {
  var maxPoint = new Point(view.size.width, view.size.height);
  return maxPoint * Point.random();
}

function playSoundFromPath(path) {
  new Howl({
    urls: [path]
  }).play();
}

function removeInvisibleCircles() {
  if (circles.length > 0) {
    if (circles[0].bounds.width < 1) {
      circles.shift();
    }
  }
}
