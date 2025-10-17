let colors = [];
let n = 10;
let tool = 'pencil';
let fillColor = '#b3b3b3';

function setup() {
  createCanvas(400, 400);
  makeColorMatrix(n);
  makeGrid(n);
}

function keyPressed() {
  if (key === 'p') tool = 'pencil';
  if (key === 'f') tool = 'fill';
  if (key === '1') fillColor = '#66c5cc';
  if (key === '2') fillColor = '#f6cf71';
  if (key === '3') fillColor = '#f89c74';
  if (key === '4') fillColor = '#dcb0f2';
  if (key === '5') fillColor = '#87c55f';
  if (key === '6') fillColor = '#9eb9f3';
  if (key === '7') fillColor = '#fe88b1';
  if (key === '8') fillColor = '#c9db74';
  if (key === '9') fillColor = '#b3b3b3';
  if (key === 'm' || key === 'M') {
    n += key === 'm' ? -5 : 5;
    makeColorMatrix(n);
    makeGrid(n);
  }
  console.log('selected tool: ' + tool);
  console.log('fill color: ' + fillColor);
  document.querySelector('.color').style.backgroundColor = fillColor;
}

function mouseClicked() {
  let i = floor(n * (mouseX / width));
  let j = floor(n * (mouseY / height));
  if (tool == 'pencil') { 
    colors[j][i] = 0;
  } else if (tool == 'fill') {
    floodFill(j, i, colors[j][i], fillColor);
  }
  makeGrid(n);
}

function floodFill(i, j, oldColor, newColor) {
  if (i < 0 || i > n-1) return;
  if (j < 0 || j > n-1) return;
  if (colors[i][j] == oldColor) {
    console.log('in fill recursive case...');
    colors[i][j] = newColor;
    floodFill(i, j+1, oldColor, newColor);
    floodFill(i, j-1, oldColor, newColor);
    floodFill(i+1, j, oldColor, newColor);
    floodFill(i-1, j, oldColor, newColor);  
  }
  
}

function makeColorMatrix(n) {
  colors = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(255);    
    }
    colors.push(row);
  }
  // console.log(colors);
}

function makeGrid(n) {
  let x = 0;
  let y = 0;
  let b = width / n;
  let h = height / n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      fill(colors[i][j]);
      rect(x,y,b,h);
      x += b;
    }
    x = 0;
    y += h;
  }
}

function draw() {
  // no loop
}