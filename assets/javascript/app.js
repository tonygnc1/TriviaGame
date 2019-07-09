var correctAnswer = true;
var incorrectAnswer = false;
var buttonChoice = "";


var questions = [
  "The Flag has 50 stripes.",
  "The Statue of Liberty is in NY City.",
  "Betsy Ross wrote the Star Spangled Banner.",
  "The Man from Uncle was really his cousin.",
  "Anne Margaret is the BOMB.",
];

var answers = ["false", "true", "false", "false", "true"];
var showQuestions;




// Upon selecting start, the button will disappear and the question will appear in its place
  $("#button").click(function (e) {
    $("$startButton").show();
    console.log("Works here");

    e.stopPropagation(); // 
  });

  $(button).click(function (e) {
    $("$startButton").hide();
  });


  $("#reset").click(resetGame);

  function displayQuestions() {
    $("question-holder").html()
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

  //    When the answer is selected and alert shown, a 2 second timer will hide the question
  // and the next question will be unhid slowly in its place.







  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
