const canvas = document.getElementById("canvas");
    

    const g = canvas.getContext("2d");
    const ctx = canvas.getContext("2d");

    function boom() {
    g.fillStyle = "brown";
    g.fillRect(875, 700, 50, 150);
    g.fillStyle = "green";
    g.beginPath();
    g.moveTo(900, 400);
    g.lineTo(700, 700);
    g.lineTo(1100, 700);
    g.closePath();
    g.fill();
    g.stroke();
    }
    
    //ballen random kleur
    function randomcolor() {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }


    function ballen() {
        ctx.fillStyle = randomcolor();
        ctx.beginPath();
        ctx.arc(Math.random() * 300 + 750, Math.random() * 250 + 450, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    ballen();
    ballen();
    ballen();
    ballen();
    ballen();
    ballen();
    ballen();





    boom();

    //ballen tekenen