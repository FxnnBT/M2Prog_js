    const canvas = document.getElementById("canvas");
    const g = canvas.getContext("2d");
    const ctx = canvas.getContext("2d");

    //boom
    g.fillStyle = "brown";
    g.fillRect(575, 500, 50, 150);
    g.fillStyle = "green";
    g.beginPath();
    g.moveTo(600, 300);
    g.lineTo(450, 500);
    g.lineTo(750, 500);
    g.closePath();
    g.fill();
    g.beginPath();
    g.moveTo(600, 200);
    g.lineTo(400, 450);
    g.lineTo(800, 450);
    g.closePath();
    g.fill();
    g.beginPath();
    g.moveTo(600, 100);
    g.lineTo(350, 400);
    g.lineTo(850, 400);
    g.closePath();
    g.fill();
    //ballen
    