img = "";

function preload(){
    img = loadImage('tvac.webp');
}

status = "";
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("green");
    text("TV", 210, 25);
    noFill();
    stroke("green");
    rect(200, 10, 250, 300);
}