let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyeLX = 0;
let eyeLY = 0;
let eyeRX = 0;
let eyeRY= 0;
let sholderRX = 0;
let sholderRY = 0;
let sholderLX = 0;
let sholderLY = 0;
let elbowRX = 0;
let elbowRY = 0;
let elbowLX = 0;
let elbowLY = 0;
let wristRX = 0;
let wristRY = 0;
let wristLX = 0;
let wristLY = 0;
let hipRX = 0;
let hipRY = 0;
let hipLX = 0;
let hipLY = 0;
let kneeLX = 0;
let kneeLY = 0;
let kneeRX = 0;
let kneeRY = 0;
let anckleLX = 0;
let anckleLY = 0;
let anckleRX = 0;
let anckleRY = 0;
let earRX = 0;
let earRY = 0;
let earLX = 0;
let earLY = 0;

 
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eyeRX = poses[0].pose.keypoints[1].position.x;
    let eRY = poses[0].pose.keypoints[1].position.y;
    let eLX = poses[0].pose.keypoints[2].position.x;
    let eLY = poses[0].pose.keypoints[2].position.y;
    let EarLX = posses[0].pose.keypoints[3].position.x;
    let EarLY = posses[0].pose.keypoints[3].position.y;
    let EarRX = posses[0].pose.keypoints[4].position.x;
    let EarRY = posses[0].pose.keypoints[4].position.y;
    let sholLX = posses[0].pose.keypoints[5].position.x;
    let sholLY = posses[0].pose.keypoints[5].position.y;
    let sholRX = posses[0].pose.keypoints[6].position.x;
    let sholRy = posses[0].pose.keypoints[6].position.y;
    let elLX = posses[0].pose.keypoints[7].position.x;
    let elLY = posses[0].pose.keypoints[7].position.x;
    let elRX = posses[0].pose.keypoints[8].position.x;
    let elRY = posses[0].pose.keypoints[8].position.x;
    let WrLX = posses[0].pose.keypoints[9].position.x;
    let wrLY = posses[0].pose.keypoints[9].position.y;
    let wrRX = posses[0].pose.keypoints[10].position.x;
    let wrRY = posses[0].pose.keypoints[10].position.y;
    let hiLX = posses[0].pose.keypoints[11].position.x;
    let hiLY = posses[0].pose.keypoints[11].position.y;
    let hiRX = posses[0].pose.keypoints[12].position.x;
    let HiRY = posses[0].pose.keypoints[12].position.y;
    let knLX = posses[0].pose.keypoints[13].position.x;
    let knLY = posses[0].pose.keypoints[13].position.y;
    let knRX = posses[0].pose.keypoints[14].position.x;
    let knRY = posses[0].pose.keypoints[14].position.y;
    let anLX = posses[0].pose.keypoints[15].position.x;
    let ancLY = posses[0].pose.keypoints[15].position.y;
    let ancRX = posses[0].pose.keypoints[16].position.x;
    let ancRY = posses[0].pose.keypoints[16].position.x;



    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyeLX = lerp(eyeLX, eLX, 0.5);
    eyeLY = lerp(eyeLY, eLY, 0.5);
    eyeRX = lerp(eyeRX,eRX,0.5);
    eyeRY = lerp(eyeRY,eRY,0.5);
    earLX = lerp(earLX,EarLX,0.5);
    earLY = lerp(earLY,EarLY,0.5);
    earRX = lerp(earRX,EarRX,0.5);
    earRX = lerp(earRX,EarRX,0.5);
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  image(video, 0, 0);
  
  let d = dist(noseX, noseY, eyelX, eyelY);

  fill(255, 0, 0);
  ellipse(noseX, noseY, d);
  ellipse(eyeLX, eyeLY, d);
  ellipse(eyeRX, eyeRY, d);
  ellipse(earLX, earLX, d);
  ellipse(earRX,earRY,d);

    
    

    
  

}
