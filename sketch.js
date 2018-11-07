var mArray = ['module', 'mow', 'material', 'micro', 'maintain', 'matter', 'make', 'manifestos', 'move', 'mastering'];
var oArray = ['of', 'oss', 'our', 'on', 'over', 'outside', 'or', 'observe', 'out'];
var wArray = ['wonder', 'words', 'window', 'what', 'workshop', 'when', 'women', 'work', 'water', 'world', 'worlding', 'weaving', 'wording'];
var m = 'module';
var o = 'of';
var w = 'wonder';
var mNum = 0;
var oNum = 0;
var wNum = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	setInterval(chooseChange, 800); // change a word every 8 millisecs
	setInterval(MOW, 20000); // show "mow" every 2 secs
}

// random number chooses which word gets changed
function chooseChange() {
var seed = random(1,3);
var choice = round (seed);
	if (choice == 1){
	changeWordM();
	}
	if (choice == 2){
	changeWordO();
	}
	if (choice == 3){
	changeWordW();
	}
}

function changeWordM() {
var seed = random(1,mArray.length-1);
var choice = round (seed);
	mNum = choice;
}

function changeWordO() {
var seed = random(1,oArray.length-1);
var choice = round (seed);
	oNum = choice;
}

function changeWordW() {
var seed = random(1,wArray.length-1);
var choice = round (seed);
	wNum = choice;

}

function MOW () {
mNum = 0;
oNum = 0;
wNum = 0;
}

function draw() {
	background(255);
	m = mArray[mNum];
	o = oArray[oNum];
	w = wArray[wNum];
	textFont('Arial');
	textSize(50);
	fill(255, 186, 21);
	textAlign(RIGHT);
	text(m, windowWidth/2-100, windowHeight/2);
	textAlign(CENTER);
	text(o, windowWidth/2, windowHeight/2);
	textAlign(LEFT);
	text(w, windowWidth/2+100, windowHeight/2);
}

function windowResized() {
  r
