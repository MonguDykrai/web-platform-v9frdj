function addLine(id, x1, y1, x2, y2) {
  const canvas = document.getElementById(id);
  const newLine = document.createElement('div');
  newLine.classList.add('line');
  const length = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  newLine.style.top = `${x1}px`;
  newLine.style.left = `${y1}px`;
  newLine.style.width = `${length}px`;
  newLine.style.transform = `rotate(${ang}deg)`;

  newLine.addEventListener('click', (e) => {
    console.log(e);
  });
  canvas.appendChild(newLine);
}

addLine('container', 50, 40, 100, 180);
addLine('container', 80, 50, 50, 150);
addLine('container', 50, 50, 150, 50);
