var imageSrc = "images/john_sprite.png";
var widthOfEachFrame = 58;
var heightOfEachFrame = 87;
var numberOfFrames = 8;

/*var imageSrc = "images/coin_sprite.png";
var widthOfEachFrame = 100;
var heightOfEachFrame = 100;
var numberOfFrames = 10;*/

/*var imageSrc = "images/mary_sprite.png";
var widthOfEachFrame = 200;
var heightOfEachFrame = 381;
var numberOfFrames = 8;*/


/*var imageSrc = "images/redman_sprite.png";
var widthOfEachFrame = 254;
var heightOfEachFrame = 513;
var numberOfFrames = 8;*/

(function () {
    var canvasLyt = document.getElementById('spriteSheet');
    canvasLyt.height = heightOfEachFrame;
    canvasLyt.width = widthOfEachFrame * numberOfFrames;
    
    var playground = canvasLyt.getContext("2d");
    var spriteImage = new Image();
    spriteImage.src = imageSrc;
    spriteImage.onload = function () {
        playground.drawImage(spriteImage, 0, 0);
    }
    
    showSingleFrame();
    
    showAllFrames();
    
    animateAllFrames();
    
    makeRunningFrames();
    
} ());

function showSingleFrame() {
    var canvasLyt = document.getElementById('staticJohn');
    canvasLyt.height = heightOfEachFrame;
    canvasLyt.width = widthOfEachFrame;
    var playground = canvasLyt.getContext("2d");
	var spriteImage = new Image();
    spriteImage.src = imageSrc;
    spriteImage.onload = function () {
        // Display first John after cropping
        playground.drawImage(spriteImage, 0,  0, widthOfEachFrame, heightOfEachFrame, 0, 0,  widthOfEachFrame, heightOfEachFrame);
    };
}

function showAllFrames() {
    var canvasLyt = document.getElementById('splittedJohn');
    canvasLyt.height = heightOfEachFrame;
    canvasLyt.width = widthOfEachFrame;

    var playground =  canvasLyt.getContext("2d");
	var spriteImage = new Image();
    spriteImage.src = imageSrc;
    spriteImage.onload = function () {
        // Display every John after cropping
        for (i = 0; i < numberOfFrames; i++) {
            playground.drawImage(spriteImage, 
                                 widthOfEachFrame * i,  0, 
                                 widthOfEachFrame, heightOfEachFrame, 
                                 0, 0,  
                                 widthOfEachFrame, heightOfEachFrame);
        }
    };
}

function animateAllFrames() {
    var canvasLyt = document.getElementById('stillground');
    canvasLyt.height = heightOfEachFrame;
    canvasLyt.width = widthOfEachFrame * numberOfFrames;
    
    var playground =  canvasLyt.getContext("2d");
	var spriteImage = new Image();
    spriteImage.src = imageSrc;
    
    spriteImage.onload = function () {
        makeOneCycle();
    };
    
    var waitPeriod = 0, currentFrame = 0, maxFrameSpeed = 10, startLocationOfFrame = 0;
    function makeOneCycle() {
        while(waitPeriod > maxFrameSpeed) {
            waitPeriod = 0;
            if (currentFrame < numberOfFrames - 1) {	
                // Go to the next frame
                currentFrame += 1;
            } else {
                currentFrame = 0;
            }
            playground.clearRect(0, 0, widthOfEachFrame, heightOfEachFrame);
            playground.drawImage(spriteImage, 
                                         widthOfEachFrame * currentFrame,  0, 
                                         widthOfEachFrame, heightOfEachFrame, 
                                         startLocationOfFrame, 0,  
                                         widthOfEachFrame, heightOfEachFrame);
        }
        waitPeriod++;
        window.requestAnimationFrame(makeOneCycle);
    }
}

function makeRunningFrames() {
    var canvasLyt = document.getElementById('playground');
    canvasLyt.height = heightOfEachFrame;
    canvasLyt.width = widthOfEachFrame * numberOfFrames;
    
    var playground =  canvasLyt.getContext("2d");
	var spriteImage = new Image();
    spriteImage.src = imageSrc;
    
    spriteImage.onload = function () {
        makeOneCycle();
    };
    
    var waitPeriod = 0, currentFrame = 0, maxFrameSpeed = 10, startLocationOfFrame = 0;
    function makeOneCycle() {
        while(waitPeriod > maxFrameSpeed) {
            waitPeriod = 0;
            if (currentFrame < numberOfFrames - 1) {	
                // Go to the next frame
                currentFrame += 1;
                startLocationOfFrame = startLocationOfFrame + widthOfEachFrame/5;
                if(startLocationOfFrame > canvasLyt.width)
                {
                    startLocationOfFrame = 0;
                }
            } else {
                currentFrame = 0;
            }
            playground.clearRect(0, 0, startLocationOfFrame + widthOfEachFrame, heightOfEachFrame);
            playground.drawImage(spriteImage, 
                                         widthOfEachFrame * currentFrame,  0, 
                                         widthOfEachFrame, heightOfEachFrame, 
                                         startLocationOfFrame, 0,  
                                         widthOfEachFrame, heightOfEachFrame);
        }
        waitPeriod++;
        window.requestAnimationFrame(makeOneCycle);
    }
}



