const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");
const ctx = canvas.getContext("2d");

function ball(xPos, yPos, radius, color) {
  g.fillStyle = color;
  g.beginPath();
  g.arc(xPos, yPos, radius, 0, 2 * Math.PI);
  g.closePath();
  g.fill();
  g.stroke();
}

function randomcolor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}
for (let i = 0; i < 500; i++) {
  ball(Math.random() * 1200, Math.random() * 900, 20, randomcolor());
}
/*ball(Math.random() * 1000, Math.random() * 900, 50, "red");
ball(Math.random() * 1000, Math.random() * 900, 40, "blue");
ball(Math.random() * 1000, Math.random() * 900, 30, "green");
ball(Math.random() * 1000, Math.random() * 900, 60, "purple");
ball(Math.random() * 1000, Math.random() * 900, 20, "orange");
*/