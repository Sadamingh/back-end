var buttonColors = ["red", "blue", "green", "yellow"];
var gameStart = false;
var gamePattern = [];
var userClickedPattern = [];
var count = 0;

function toggleButton(color) {
  $('#' + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var sound = new Audio('/sounds/' + color + '.mp3');
  sound.play();
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var color = buttonColors[randomNumber];
  gamePattern.push(color);
  toggleButton(color);
  userClickedPattern = [];
  count++;
  $('#level-title').text("Level " + count);
}

function checkAnswer() {
  for (var i=0; i<userClickedPattern.length; i++) {
    if (gamePattern[i] != userClickedPattern[i]) {
      return false;
    }
  }
  return true;
}

$(".btn").click(function() {
  if (gameStart) {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    toggleButton(userChosenColor);
    if (!checkAnswer()) {
      gameStart = false;
      count = 0;
      $('#level-title').text("Game Over! Press any key to restart.");
    } else {
      if (userClickedPattern.length == gamePattern.length) {
        setTimeout(nextSequence, 1000);
      }
    }
  }
});

$(document).keypress(function(){
  if (!gameStart) {
    nextSequence();
    gameStart = true;
  }
});
