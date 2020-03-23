# JS-TMGamepadVisualInputs
Draws visually 4 inputs (for racing games) of your gamepad, so you can use it in e.g. OBS.
Applies to different games, but made in mind with TrackMania.

# How to Install/Configure
Variant A: Watch video.
https://youtu.be/wnIEWCdgi3s

Variant B: Read instruction below.

a) Download [Release](https://github.com/Beridok/JS-TMGamepadVisualInputs/releases/latest) ZIP file.

b) Place in known location - I suggest obs-studio.

c) Extract it there.

d) Visit [HTML5Gamepad.com](https://html5gamepad.com/) - you might need to re-plug your gamepad if "No gamepad detected." message appears.

e) Move left analog stick - check "AXIS0" for deadzone. E.g. Stick in rest position having value 0.00368 (not "0") means you have deadzone. You can use deadzone of 0.01 for such value.

g) Click button that you click to accelerate in the game - check what is number of button is pressed, e.g. "B1".

h) Repeat same for braking, e.g. "B5".

i) Open tmpad.js file with Notepad - pay attention to lines 2-4 & 7.

If you stream/record in 60 FPS - do nothing. If value is diffent then change number in line 7 from 60 to desired.
For lines 2-4 you need to enter your button numbers. Just numbers, so "B1" becomes "1".
```javascript
var accButton = 1; //Acceleration button id.
var brakeButton = 5; //Brake button id.    
var deadzone = 0.01; //Put deadzone value here.
```

j) Save file.

k) Open OBS and in your Scene's Sources add "Browser".

l) Tick "Local file", then "browse" and select "tmpad.html" file.

m) Set width as 1500 and height as 800.

n) Set custom frame rate to 60 (or whatever you use in recording/stream).

o) Remove text from "Custom CSS" text area.

p) Tick "Refresh browser when scene becomes active".

q) Click "OK". Resize your browser window as you want. Time to remove background.

r) Right click on "Browser" (in Sources) and choose "Filters".

s) In "Effect Filters" click + icon and add "Chroma Key".

t) Change "Key Color Type" to Custom, then click "Select Color" and in HTML text-area enter "#200000". Hit "OK".

u) Decrease similarity and smoothness to 1.

v) Add new effect (+ icon) "Crop/Pad". Make sure "relative" is active and type "80" to "Right" field.

w) You can close Filters now.

x) Try moving gamepad and pushing buttons. If nothing happens, replug gamepad.


