var RADIUS = 50;

function onKeyDown(event) {
  createRandomCircle();
}

function createRandomCircle() {
  var circle = new Path.Circle(getRandomPointInView(), RADIUS);
  circle.fillColor = "purple";
}

function getRandomPointInView() {
  var maxPoint = new Point(view.size.width, view.size.height);
  return maxPoint * Point.random();
}
