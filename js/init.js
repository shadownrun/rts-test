var $scene;
var frameRate = 0;
var canvas;
var lastTime;
while ($scene!=undefined){
	if(typeof($scene.main)=="function")scene.main();
}
function init(fps) {
	// Get the canvas element using the DOM
    canvas = document.getElementById('mycanvas');

    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext){
		// Use getContext to use the canvas for drawing
		ctx = canvas.getContext('2d');
		ctx.font = "16px Verdana";
		frameRate = fps;
				
		// Initialize game, before game start to call updates
		// This is function which you need to make every game!
		initGame();
		
		// We need to initialize lastTime, so we don't get false delta value on first update
		lastTime = new Date().getTime();
		
		if (fps > 0) {
			timeInterval = 1000 / fps;
			// timer calls fw_update function as often we want
			setInterval(fw_update, timeInterval);
		} else {
			// if we don't have timer, we update once our framework
			fw_update();
		}
		
		// Setup events
		canvas.onmousemove = fw_mouseMove;
		canvas.onmousedown = fw_mouseDown;
		canvas.onmouseup = fw_mouseUp;	
    } else {
		alert('You need HTML5 compatible browser to see this demo!');
    }
}

function fw_update()
{
	// we update time 
	var currTime = new Date().getTime();
	// and calculate time of between two frames
	var delta = (currTime - lastTime) / 1000.0;
	// we need to remember previous time
	lastTime = currTime;
	
	// we don't accept too big delta values
	if (delta > 1.0) delta = 1.0;
	
	// update game logic
	if(typeof($scene.update)=="function")scene.update(delta);

}

var mouseMovedX;
var mouseMovedY;
var mouseButton;

function fw_mouseMove(evt)
{
	// We calculate mouse canvas position
	mouseMovedX = evt.clientX - canvas.offsetLeft;
	mouseMovedY = evt.clientY - canvas.offsetTop;

	// If we don't use timer, we need to update canvas everytime when user do something
	if (frameRate == 0) fw_update();	
}

function fw_mouseDown(evt)
{
	// We calculate mouse canvas position
	mouseMovedX = evt.clientX - canvas.offsetLeft;
	mouseMovedY = evt.clientY - canvas.offsetTop;

	// Button is pressed down
	switch(evt.which) {
		case 1 : mouseButton |= 0x01;	// left
			break;
		case 2 : mouseButton |= 0x02;	// middle
			break;
		case 3 : mouseButton |= 0x04;	// right
			break;
	}

	// If we don't use timer, we need to update canvas everytime when user do something
	if (frameRate == 0) fw_update();	
}

function fw_mouseUp(evt)
{
	// We calculate mouse canvas position
	mouseMovedX = evt.clientX - canvas.offsetLeft;
	mouseMovedY = evt.clientY - canvas.offsetTop;

	// Button released
	switch(evt.which) {
		case 1 : mouseButton &= 0x06;
			break;
		case 2 : mouseButton &= 0x05;
			break;
		case 3 : mouseButton &= 0x03;
			break;
	}

	// If we don't use timer, we need to update canvas everytime when user do something
	if (frameRate == 0) fw_update();	
}
