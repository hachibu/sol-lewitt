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

var canvas = document.getElementById('canvas');

canvas.appendChild(createShapeElement(sample(shapes)));
