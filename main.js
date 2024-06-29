function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.postion(110, 250);
    video = creteCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw() {
    Image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    SVGAElement('student_name.png');
}

function filter_tint()
{
    tint_color = docment.getElementById("color_name").value;
}