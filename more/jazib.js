function doFirst() {
	barsize = 600;
	mov = document.getElementById('mov');
	playbtn = document.getElementById('playButton');
	bar = document.getElementById('defaultBar');
	pb = document.getElementById('progressBar');
	playbtn.addEventListener('click',playOrPause,false);
	bar.addEventListener('click',clickedBar,false);

	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	canvas.shadowOffsetX=5;
	canvas.shadowOffsetY=5;
	canvas.shadowBlur=8;
	canvas.shadowColor='rgba(0,0,255,.5)';

	canvas.font = 'bold 36px Tahoma';
	canvas.textAlign='start';
	canvas.strokeStyle='green';
	canvas.strokeRect(5,5,x.width-10,x.height-10);
	canvas.fillText("random bullshit",150,350);
	canvas.translate(100,100);
	canvas.fillText("after translate",0,0);
	canvas.rotate(0.785);
	canvas.translate(10,10);
	canvas.fillText("after rotate",0,0);
	canvas.translate(-60,90);
	canvas.scale(1.5,2);
	canvas.fillText("after scale",0,0);

	 y = document.getElementById('canvas2');
	 z = document.getElementById('canvas3');
	canvas2 = y.getContext('2d');
	canvas3 = z.getContext('2d');

	pic = new Image();
	pic.src="img/pic.jpg"
	pic.addEventListener('load',printpic,false);

	var g = canvas3.createLinearGradient(0,0,600,400);
	g.addColorStop(.25,'red');
	g.addColorStop(.5,' blue');
	g.addColorStop(.75,'green');
	g.addColorStop(1,'yellow');

	canvas3.fillStyle=g;

	canvas3.fillRect(0,0,z.width,z.height);
/*mouse animation start*/
}

function anime(e) {
	canvas3.clearRect(0,0,600,400);
	var xpos=e.clientX;
	var ypos= e.clientY;
	canvas3.fillRect(xpos-400,ypos-90,50,50);
}

function printpic() {
	canvas2.drawImage(pic,5,5,y.width-10,y.height-10);
}
function playOrPause() {
	if (!mov.ended && !mov.paused) {
		mov.pause();
		playbtn.textContent = 'Play';
		window.clearInterval(updateBar);
	}
	else
	{	
		mov.play();
		playbtn.textContent='Pause';
		updateBar = setInterval(update,500);
	}
}

function update() {
		if(!mov.ended)
			{
		 w = mov.currentTime*barsize/mov.duration;
		pb.style.width = w+'px';
			}
		else {
			pb.style.width = 0+'px';
			playbtn.innerHTML='Play';
			window.clearInterval(updateBar);
			}
}
function clickedBar(e) {
	var mousex=e.pageX-bar.offsetLeft;
	var newTime = mousex*mov.duration/barsize;
	mov.currentTime=newTime;
	pb.style.width=mousex+'px'; 
	
}

window.addEventListener('load',doFirst,false);
	window.addEventListener("mousemove",anime,false);
