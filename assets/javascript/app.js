var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizcontainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var resetButton = document.getElementById('resetButton');


function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex) + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
};
function loadNextQuestion() {
  event.preventDefault();
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if (!selectedOption){
    alert('Choose one or GO HOME');
    return;
  }

  var answer = selectedOption.value;
  if(questions[currentQuestion].answer == answer) {
    score += 1;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if(currentQuestion == totQuestions){
    nextButton.textContent = 'Finished';
  }

  if(currentQuestion == 4){
    console.log(score);
    container.style.display = 'none';
    // $("#result").style.display = '';
    resultCont.textContent = 'Your Score is ' + score;
    return;
  }
  loadQuestion(currentQuestion + 1);
}


// console.log(currentQuestion);

loadQuestion(currentQuestion);







