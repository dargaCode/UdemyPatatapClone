RADIUS = 50;

function onKeyDown(event) {
  console.log(getRandomPointInView());
  createRandomCircle();
}

function createRandomCircle() {
  new Path.Circle({
    center: getRandomPointInView(),
    radius: RADIUS,
    strokeColor: "black",
    fillColor: "purple"
  });
}

function getRandomPointInView() {
  var maxPoint = new Point(view.size.width, view.size.height);
  return maxPoint * Point.random();
}
