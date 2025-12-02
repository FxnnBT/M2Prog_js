const canvas = document.getElementById("canvas");
    

    const g = canvas.getContext("2d");
    const ctx = canvas.getContext("2d");

    function boom() {
    // stam
    g.fillStyle = "brown";
    g.fillRect(875, 700, 50, 150);
    
    // meerdere lagen groene driehoeken
    g.fillStyle = "green";
    
    // onderste laag
    g.beginPath();
    g.moveTo(900, 550);
    g.lineTo(750, 700);
    g.lineTo(1050, 700);
    g.closePath();
    g.fill();
    g.stroke();
    
    // middelste laag
    g.beginPath();
    g.moveTo(900, 450);
    g.lineTo(780, 600);
    g.lineTo(1020, 600);
    g.closePath();
    g.fill();
    g.stroke();
    
    // bovenste laag
    g.beginPath();
    g.moveTo(900, 350);
    g.lineTo(820, 500);
    g.lineTo(980, 500);
    g.closePath();
    g.fill();
    g.stroke();
    
    // ster op de top
    g.fillStyle = "gold";
    g.beginPath();
    g.moveTo(900, 320);
    g.lineTo(910, 345);
    g.lineTo(935, 345);
    g.lineTo(915, 360);
    g.lineTo(925, 385);
    g.lineTo(900, 370);
    g.lineTo(875, 385);
    g.lineTo(885, 360);
    g.lineTo(865, 345);
    g.lineTo(890, 345);
    g.closePath();
    g.fill();
    g.stroke();
    }
    
    //random kleur
    function randomcolor() {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }

    // vaste posities voor de ballen
    const ballenPosities = {
        bal1: { xpos: 820, ypos: 670 },
        bal2: { xpos: 980, ypos: 670 },
        bal3: { xpos: 900, ypos: 640 },
        bal4: { xpos: 850, ypos: 580 },
        bal5: { xpos: 950, ypos: 580 },
        bal6: { xpos: 870, ypos: 510 },
        bal7: { xpos: 930, ypos: 480 },
        bal8: { xpos: 900, ypos: 400 }
    };

    function ballen() {
        Object.values(ballenPosities).forEach(pos => {
            ctx.fillStyle = randomcolor();
            ctx.beginPath();
            ctx.arc(pos.xpos, pos.ypos, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        });
    }

    // functie om huisje 1 te tekenen
    function huisje1() {
        // voorkant
        ctx.fillStyle = "white";
        ctx.fillRect(100, 720, 80, 80);
        ctx.strokeRect(100, 720, 80, 80);
        
        // dak
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(140, 680);
        ctx.lineTo(90, 720);
        ctx.lineTo(190, 720);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    function huisje2() {
        // voorkant
        ctx.fillStyle = "white";
        ctx.fillRect(200, 720, 80, 80);
        ctx.strokeRect(200, 720, 80, 80);
        

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(240, 680);
        ctx.lineTo(190, 720);
        ctx.lineTo(290, 720);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }


    function huisje3() {

        ctx.fillStyle = "white";
        ctx.fillRect(300, 720, 80, 80);
        ctx.strokeRect(300, 720, 80, 80);
        

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(340, 680);
        ctx.lineTo(290, 720);
        ctx.lineTo(390, 720);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }


    function huisje4() {

        ctx.fillStyle = "white";
        ctx.fillRect(400, 720, 80, 80);
        ctx.strokeRect(400, 720, 80, 80);
        

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(440, 680);
        ctx.lineTo(390, 720);
        ctx.lineTo(490, 720);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    boom();
    ballen();
    
    // huisjes
    huisje1();
    huisje2();
    huisje3();
    huisje4();
