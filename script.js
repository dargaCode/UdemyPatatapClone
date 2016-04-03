// CONSTANTS

var RADIUS = 500;

var KEYS = {
  "q": {sound: "sounds/bubbles.mp3"},
  "w": {sound: "sounds/clay.mp3"},
  "e": {sound: "sounds/confetti.mp3"},
  "r": {sound: "sounds/corona.mp3"},
  "t": {sound: "sounds/dotted-spiral.mp3"},
  "y": {sound: "sounds/flash-1.mp3"},
  "u": {sound: "sounds/flash-2.mp3"},
  "i": {sound: "sounds/flash-3.mp3"},
  "o": {sound: "sounds/glimmer.mp3"},
  "p": {sound: "sounds/moon.mp3"},
  "a": {sound: "sounds/pinwheel.mp3"},
  "s": {sound: "sounds/piston-1.mp3"},
  "d": {sound: "sounds/piston-2.mp3"},
  "f": {sound: "sounds/piston-3.mp3"},
  "g": {sound: "sounds/prism-1.mp3"},
  "h": {sound: "sounds/prism-2.mp3"},
  "j": {sound: "sounds/prism-3.mp3"},
  "k": {sound: "sounds/splits.mp3"},
  "l": {sound: "sounds/squiggle.mp3"},
  "z": {sound: "sounds/strike.mp3"},
  "x": {sound: "sounds/suspension.mp3"},
  "c": {sound: "sounds/timer.mp3"},
  "v": {sound: "sounds/ufo.mp3"},
  "b": {sound: "sounds/veil.mp3"},
  "n": {sound: "sounds/wipe.mp3"},
  "m": {sound: "sounds/zig-zag.mp3"}
};

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  var key = event.key;
  if (KEYS[key]) {
    soundPath = KEYS[key].sound;
    playSoundFromPath(soundPath);
    addRandomCircle();
  }
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
