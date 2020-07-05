//IMPORTING FONT
var font;
function preload() {
    font = loadFont('./fonts/font.otf');
}

//VARIABLES
var name="malay";
        
//SETUP FUNCTION
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent('p5');
    textFont(font);
    angleMode(DEGREES);
    noCursor();
}

//EXPORTING PNG     
function keyTyped() {
    if (key === '1') {
    var save=name.toLowerCase();
    saveCanvas(save, 'png');
    }
}

//DRAW FUNCTION
function draw() {

    //CONVERT NAME TO UPPER CASE
    name=name.toUpperCase();

    //COLOR THEME
    ColorTheme(name);

    //PRIMARY SHAPE
    PrimaryShape(name);

    //INNER CIRCLES
    InnerCircles(name);

    //UPPER SHAPE
    UpperShape(name);

    //LOWER SHAPE
    LowerShape(name);

    //ORBITING CIRCLES
    OrbitingCircles(name);

    //DISPLAYING NAME
    Branding(name);

}