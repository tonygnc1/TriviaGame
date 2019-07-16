var wins = 0;
var i = 0;
var buttonChoice = "";
var counter = 10;

var questions = [
 "The Flag has 12 red stripes?",
  "The Statue of Liberty is in NY City.",
  "Betsy Ross wrote the Star Spangled Banner.",
  "The Man from Uncle was really his cousin.",
  "Anne Margaret is the BOMB."
];

var answers = ["false", "true", "false", "false", "true"];
var showQuestions;


// Upon selecting start, the button will disappear and the question will appear in its place

$("#q") function() {
  $("#p").hide();
}

$("#startButton").on("click", function() {
    $("#startButton").remove();
})

function() {
  if ("#startButton") ==.remove() {
    $("#p").show();
  }
}

// $(document).ready(function () {
//   function startNewGame() {
    

//       console.log(click);
//     }
//   }

// startNewGame()




  // function showQuestions()

  

  function displayQuestions() {
    $("questionsHolder").html()
  }

  function check() {
    document.getElementById("correctAnswer").checked = true;
  }
  function check() {
    document.getElementById("incorrectAnswer").checked = false;
  }


  // The selected answer is shown an alert box with Correct or Incorrect Response
  if (checked == correctAnswer) {
  document.getElementById("correctAnswer").textContent = ++correctAnswer;
  startNewGame()
  alert("Correct answer")
  console.log(correctAnswer);

  if (checked == incorrectAnswer) {
    document.getElementById("incorrectAnswer").textContent = ++incorrectAnswer;
    startNewGame()
    alert("Incorrect answer")
    console.log(incorrectAnswer);
  }
}
$("#reset").click(resetGame);

//    When the answer is selected and alert shown, a 2 second timer will hide the question
// and the next question will be unhid slowly in its place.







