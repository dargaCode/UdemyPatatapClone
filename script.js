// CONSTANTS

var RADIUS = 500;

var KEYS = {
  "q": {color: "red", sound: "sounds/bubbles.mp3"},
  "w": {color: "red", sound: "sounds/clay.mp3"},
  "e": {color: "red", sound: "sounds/confetti.mp3"},
  "r": {color: "red", sound: "sounds/corona.mp3"},
  "t": {color: "red", sound: "sounds/dotted-spiral.mp3"},
  "y": {color: "red", sound: "sounds/flash-1.mp3"},
  "u": {color: "red", sound: "sounds/flash-2.mp3"},
  "i": {color: "red", sound: "sounds/flash-3.mp3"},
  "o": {color: "red", sound: "sounds/glimmer.mp3"},
  "p": {color: "red", sound: "sounds/moon.mp3"},
  "a": {color: "red", sound: "sounds/pinwheel.mp3"},
  "s": {color: "red", sound: "sounds/piston-1.mp3"},
  "d": {color: "red", sound: "sounds/piston-2.mp3"},
  "f": {color: "red", sound: "sounds/piston-3.mp3"},
  "g": {color: "red", sound: "sounds/prism-1.mp3"},
  "h": {color: "red", sound: "sounds/prism-2.mp3"},
  "j": {color: "red", sound: "sounds/prism-3.mp3"},
  "k": {color: "red", sound: "sounds/splits.mp3"},
  "l": {color: "red", sound: "sounds/squiggle.mp3"},
  "z": {color: "red", sound: "sounds/strike.mp3"},
  "x": {color: "red", sound: "sounds/suspension.mp3"},
  "c": {color: "red", sound: "sounds/timer.mp3"},
  "v": {color: "red", sound: "sounds/ufo.mp3"},
  "b": {color: "red", sound: "sounds/veil.mp3"},
  "n": {color: "red", sound: "sounds/wipe.mp3"},
  "m": {color: "red", sound: "sounds/zig-zag.mp3"}
};

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  var key = event.key;
  if (KEYS[key]) {
    var soundPath = KEYS[key].sound;
    var color = KEYS[key].color;
    playSoundFromPath(soundPath);
    addRandomCircle(color);
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

function addRandomCircle(color) {
  var circle = new Path.Circle(getRandomPointInView(), RADIUS);
  circle.fillColor = color;
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
