//config
var deadzone = 0.01;
var accButton = 1;
var brakeButton = 5;
var gamepadID = 0; //Leave "0" if you have only one. If more, then you need to try switching this number.
var pixels = 500; //How wide are the triangles for analog sticks.
var frames = 60; //Default frames per second
//end of config
/* default config
var deadzone = 0.01;
var accButton = 1;
var brakeButton = 5;
var gamepadID = 0; //Leave "0" if you have only one. If more, then you need to try switching this number.
var pixels = 500; //How wide are the triangles for analog sticks.
var frames = 60; //Default frames per second
//end of config
*/
/*
visit this website and check what is value of AXIS0 and AXIS1 when your stick is in rest position
https://html5gamepad.com/
Also check which number of button is pressed when you use Acceleration and Brake, for me it's 1 and 5.
*/

var startTime = new Date();
console.log("Script started @ "+startTime);

window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
});

window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Gamepad disconnected from index %d: %s",
    e.gamepad.index, e.gamepad.id);
	alert("Gamepad disconnected! Replug it to initate detection.");
});

function accelOn(){
	document.getElementById('up').className = "triangle-up active-up";
}
function accelOff(){
	document.getElementById('up').className = "triangle-up"
}
function brakeOn(){
	document.getElementById('down').className = "triangle-down active-down";
}
function brakeOff(){
	document.getElementById('down').className = "triangle-down"
}

function analog(value){
	if ( value == 0 || value < deadzone && value > -deadzone )
	{
		document.getElementById('left').style['border-right'] = "0px solid #CD5B33";
		document.getElementById('right').style['border-left'] = "0px solid #CD5B33";
	}
	else if ( value <= -deadzone )
	{
		stickLevel = -pixels*value;
		document.getElementById('left').style['border-right'] = stickLevel+"px solid #CD5B33";
		document.getElementById('right').style['border-left'] = "0px solid #CD5B33";
		
	}
	else if ( value >= deadzone )
	{
		stickLevel = pixels*value;
		document.getElementById('left').style['border-right'] = "0px solid #CD5B33";
		document.getElementById('right').style['border-left'] = stickLevel+"px solid #CD5B33";
	}
}

/*
var gp = navigator.getGamepads()[gamepadID];
var gpA1 = gp.axes[0];
var gpA2 = gp.axes[1];
var gpAcc = gp.buttons[1].pressed;
var gpBrk = gp.buttons[5].pressed;
*/

var refreshInterval = (1000/frames).toFixed(2);
setInterval(() => {
	var gp = navigator.getGamepads()[0];
	var gpAnal = gp.axes[0];
	var gpAcc = gp.buttons[1].pressed;
	var gpBrk = gp.buttons[5].pressed;
	if ( gpAnal != 0 )
	{
		analog(gpAnal);
	}
	if ( gpAcc === true ) { accelOn() }
	else if ( gpAcc === false ) { accelOff() }
	if ( gpBrk === true ) { brakeOn() }
	else if ( gpBrk === false ) { brakeOff() }
}, refreshInterval)
