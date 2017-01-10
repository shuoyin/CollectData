var digit = '-1';
var color = new Array(25);
for(var i=0; i<25; i++) color[i]=255;

var can = document.getElementById('can');
var ctx = can.getContext('2d');
ctx.rect(0,0,500,500);
for(var i=0; i<5; i++){
	for(var j=0; j<5; j++){
		ctx.rect(i*100, j*100, 100, 100);
	}
}
ctx.stroke();

function clicked(e){
	var x = Math.floor(e.offsetX/100);
	var y = Math.floor(e.offsetY/100);
	var block = y*5+x;
	var newcolor = 255 - color[block];
	color[block] = newcolor;
	var rgb = 'rgb('+newcolor+','+newcolor+','+newcolor+')';
	ctx.fillStyle = rgb;
	ctx.fillRect(x*100+1, y*100+1, 98, 98);
	console.log('clicked');
}

function reset(){
	for(var i=0; i<25; i++) color[i]=255;
	ctx.fillStyle = 'rgb(255,255,255)'
	for(i=0; i<5; i++)
		for(j=0; j<5; j++)
			ctx.fillRect(i*100+1, j*100+1, 98, 98);
}

function send(){
	//var letter = document.getElementById('letter');
	//need regexp to check whether the letter is validate
	var data = {
		value: digit,
		image: color
	};
	var content = JSON.stringify(data);
	request = new XMLHttpRequest();
	request.open('POST', 'uplode', true);
	request.send(content);
}

can.onclick = clicked;