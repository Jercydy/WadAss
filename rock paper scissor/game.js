
// create anonymous click funtion and asign to variable
var userInput = $(".btn").click(function() {//add click event to btn
  var userChosenColour = $(this).attr("id");//asign id value of btn clicked to vaiable
  var com = comChoice();
  animatePress(userChosenColour);//callback funtion to animate when click triggered
  checkWinner(userChosenColour, com);
  var chkWin = checkWinner(userChosenColour, com);
  changeText(chkWin);
  console.log(userChosenColour);
  console.log(com);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function comChoice() {
  var pick;
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    pick = 'rock';
  } else if (randomNumber == 1) {
    pick = 'paper';
  } else if (randomNumber == 2) {
    pick = 'scissors';
  }

  return pick;
}

function changeText(txt) {
  if (txt == 'Player') {
    $("#isWinner").text("You win");
    setTimeout(function() {
      $("#isWinner").text("Pick!!!");
    }, 2000);

  } else if (txt == 'Computer') {
    $("#isWinner").text("Computer win");
    setTimeout(function() {
      $("#isWinner").text("Pick!!!");
    }, 2000);
  } else if (txt == 'Draw') {
    $("#isWinner").text("Draw");
    setTimeout(function() {
      $("#isWinner").text("Pick!!!");
    }, 2000);
  }
}

function checkWinner(player, computer) {
  if (player === computer) {
    // $("#isWinner").text("Draw");
    return 'Draw';
  }

  if (player === 'rock') {
    if (computer === 'paper') {
      // $("#isWinner").text("Computer Win");
      return 'Computer';
    } else {
      // $("#isWinner").text("You Win");
      return 'Player';
    }
  }
  if (player === 'paper') {
    if (computer === 'scissors') {
      // $("#isWinner").text("Computer Win");
      return 'Computer';
    } else {
      // $("#isWinner").text("You Win");
      return 'Player';
    }
  }

  if (player === 'scissors') {
    if (computer === 'rock') {
      // $("#isWinner").text("Computer Win");
      return 'Computer';
    } else {
      // $("#isWinner").text("You Win");
      return 'Player';
    }
  }
}
