const sample = (array) => array[Math.ceil(Math.random() * array.length) - 1];

const createShapeElement = (shape) => {
  var outer = document.createElement('div');
  var inner = document.createElement('div');
  var border = document.createElement('div');

  outer.classList += 'canvas stripes--horizontal';
  inner.classList += `shape shape--${shape} stripes--vertical`;
  border.classList += `shape--border shape--${shape}`;

  outer.appendChild(inner);
  outer.appendChild(border);

  return outer;
};

const shapes = [
  'circle',
  'frame',
  'hexagon',
  'heptagon',
  'triangle',
  'nonagon',
  'octagon',
  'parallelogram',
  'decagon',
  'pentagon',
  'rhombus',
  'trapazoid',
  'square'
];

const draw = () => {
  var canvas = document.getElementById('canvas');
  while (canvas.children.length > 0) {
    canvas.removeChild(canvas.lastChild);
  }
  canvas.appendChild(createShapeElement(sample(shapes)));
  setTimeout(() => window.requestAnimationFrame(draw), 1000);
};

draw();
