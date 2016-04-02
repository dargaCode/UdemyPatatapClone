// CONSTANTS

var RADIUS = 50;

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  addRandomCircle();
}

function onFrame(event) {
  circles.forEach(function(element) {
    element.fillColor.hue += 2;
    element.scale(0.92);
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

function removeInvisibleCircles() {
  console.log(circles);
  if (circles.length > 0) {
    if (circles[0].bounds.width < 1) {
      circles.shift();
    }
  }
}
