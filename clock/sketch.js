function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
	let h=hour();
	let m=minute();
	let s=second();
	translate(windowWidth/2,windowHeight/2);

	background(0);
	fill(255);
	noStroke();
	textSize(40);
	text(h+':'+m+':'+s,200,200);
	noFill();
	rotate(-90);
	
	stroke(100);
	strokeWeight(1);
	ellipse(0,0,400,400);
	strokeWeight(2);
	point(0,h);

	let secAngle=map(s,0,60,0,360);
	stroke(220,100,255);
	strokeWeight(4);
	arc(0,0,380,380,0,secAngle);
	push();
	rotate(secAngle);
	line(0,0,120,0);
	pop();

	let minAngle=map(m,0,60,0,360)+ map(secAngle, 0, 360, 0, 6);
	stroke(255,220,100);
	strokeWeight(6);
	arc(0,0,360,360,0,minAngle);
	push();
	rotate(minAngle);
	line(0,0,100,0);
	pop();

	let hourAngle=map(h%12,0,12,0,360)+ map(minAngle, 0, 360, 0, 6);
	stroke(100,255,220);
	strokeWeight(8);	
	arc(0,0,340,340,0,hourAngle);
	push();
	rotate(hourAngle);
	line(0,0,70,0);
	pop();

	

		

	stroke(255);
	ellipse(0,0,4,4);

	let hours=[]
	point()
}