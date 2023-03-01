function setup() {
	var canvas = createCanvas(500,500);
	canvas.parent('contenedor');
	background(255);
}

function draw() {
	background(255);
	line(250,25,250,475);
	line(25,250,475,250);
	text('X', 485, 250);
	text('Y', 250, 15);
	if (mouseX < 250 && mouseY < 250) {
		fill(0,0,255);
		stroke(0,0,255);
		rect(mouseX,mouseY,100,50);
		text('Segundo cuadrante\n(sen +, cos -, tg -)\n(90º-180º)', 20, 20);
	}
	else if (mouseX < 250 && mouseY > 250) {
		fill(255,0,0);
		stroke(255,0,0);
		square(mouseX,mouseY,75);
		text('Tercer cuadrante\n(sen -, cos -, tg +)\n(180º-270º)', 20, 270)
	}
	else if (mouseX > 250 && mouseY < 250) {
		fill(0,255,0);
		stroke(0,255,0);
		triangle(mouseX, mouseY, mouseX-50, mouseY+50, mouseX+50, mouseY+50);
		text('Primer cuadrante\n(sen +, cos +, tg +)\n(0º-90º)', 270, 20);
	}
	else if (mouseX > 250 && mouseY > 250) {
		fill(125,125,125);
		stroke(125,125,125);
		circle(mouseX,mouseY,75);
		text('Cuarto cuadrante\n(sen -, cos +, tg -)\n(270º-360º)', 270, 270);
	}
}

function mostrarOcultarPanel() {
	var panel = document.getElementById("contenedor");
	p = document.getElementById("textoBoton");
    if (panel.style.display === "none") {
        panel.style.display = "block";
        p.innerHTML = "El lienzo se está mostrando.";
        p.style.color = "#00A412";

    } else {
        panel.style.display = "none";
        p.innerHTML = "El lienzo está oculto.";
        p.style.color = "#DA0202"
    }
}