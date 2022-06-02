function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCapture(550,550);
  canvas.position(560,150);
poseNet= ml5.poseNet(video, modelLoaded);
poseNet = ml5.poseNet('pose',  gotposes)
}
function gotposes(results){
    if(results.length>0)
    {
        console.log(results);
    }
}
function  modelLoaded(){
    console.log('poseNet Is Initialized!');
}
function draw(){
    background('#969a97');
}
