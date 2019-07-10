var correctAnswer = true;
var incorrectAnswer = false;
var buttonChoice = "";


var questions = [
  "The Flag has 50 stripes.",
  "The Statue of Liberty is in NY City.",
  "Betsy Ross wrote the Star Spangled Banner.",
  "The Man from Uncle was really his cousin.",
  "Anne Margaret is the BOMB."
];

var answers = ["false", "true", "false", "false", "true"];
var showQuestions;




// Upon selecting start, the button will disappear and the question will appear in its place


$(document).ready(function() {
  $("#divShow");
  $("#myDiv").css("display","block");
})

$("#divHide").click(function() {
  $("#myDiv").css("display","none");
})
   
 

  function showQuestions()

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







    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
