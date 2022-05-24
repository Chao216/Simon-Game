//global variables

const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];


// the random pattern for game

function nextSequence() {

  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  $("#" + randomColor).fadeOut().fadeIn().fadeOut().fadeIn();

  playSound(randomColor);
  userClickPattern=[];
}
//=============================================================================
function playSound(currentColor) {
  switch (currentColor) {
    case "red":
      var audio = new Audio("./sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("./sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("./sounds/green.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("./sounds/yellow.mp3");
      audio.play();
      break;
  };
};


// animation and sound for random buttons

//animation with jQuery====================================================================================




// the users' click pattern
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickPattern.push(userChosenColor);


  reactSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickPattern.length-1);







});


function reactSound(currentColor) {
  switch (currentColor) {
    case "red":
      var audio = new Audio("./sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("./sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("./sounds/green.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("./sounds/yellow.mp3");
      audio.play();
      break;
  };
};

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed")
  }, 200)
};

//Start the game with keyboard event listener

var started = false;
var level = 0


$(document).keydown(function() {
    if (!started) {
      nextSequence();
      started = true;
    };

  }

)


//compare the patterns

function checkAnswer(lastItem){

  if (userClickPattern[lastItem] ===gamePattern[lastItem]) {
    if (userClickPattern.length===gamePattern.length){
      setTimeout(()=>{
        nextSequence();
      },1000)
    }
  } else {
    var audio = new Audio("./sounds/wrong.mp3")
    audio.play();
    $("body").addClass("game-over");
    setTimeout(()=>{$("body").removeClass("game-over")},2000);
    $("#level-title").text("Game Over, Press Any Key To Start Over!");
    startOver();
  }



}


//start Over

function startOver(){
  level =0;
  gamePattern=[];
  started=false;
}
