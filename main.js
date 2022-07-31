nose_x = 0;
nose_y = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/9MHVBQVS/d3c172a4cb66495cdf11d66d8e0388c9-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    nose_x = results[0].pose.nose.x - 14;
    nose_y = results[0].pose.nose.y - 1;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}