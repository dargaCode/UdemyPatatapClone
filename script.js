// CONSTANTS

var RADIUS = 50;

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  addRandomCircle();
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
