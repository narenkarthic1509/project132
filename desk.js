statusofcoco = "";

function preload(){
    imge = loadImage("desk.jpg");
}

function setup(){
    canvas = createCanvas(612,408);
    canvas.position(450,300);

    objectdetect = ml5.objectDetector('cocossd',modelLoaded);

    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded(){
    console.log("model has been loaded");
    statusofcoco = true;
    objectdetect.detect(imge,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(imge,0,0,612,408);
}