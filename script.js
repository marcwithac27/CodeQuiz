var sec = 60
var score =0
var correctAnswers = 0 
var recordsEl = document.getElementById('records')
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerElement= document.getElementById('timer')
var currentScoreEl = document.getElementById('current-score')
var highScoreEl = document.getElementById('high-score')
var outOfTimeEl = document.getElementById('outOfTime')
var containerEl = document.getElementById('container')
var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame,)

nextButton.addEventListener('click', () => {
  
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  recordsEl.classList.remove('hide')
  
  
  startTimer()
  time = setInterval(startTimer, 1000)
  setNextQuestion()
}


function startTimer (){
  
  timer.innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        resetGame();
    }

}

function resetGame(){
  containerEl.classList.add('hide')
  recordsEl.classList.add('hide')
  outOfTimeEl.classList.remove('hide')
}




function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


var questions = [
  {
    question: 'What is the Capital Of Florida',
    answers: [
      { text: 'Tallahassee', correct: true },
      { text: 'Miami', correct: false },
      { text: 'Tampa', correct: false},
      { text: 'Sanford', correct: false}
    ]
  },
  {
    question: 'Who is the Governer of Florida?',
    answers: [
      { text: 'Ron DeSantis', correct: true },
      { text: 'Rick Scott', correct: false },
      { text: 'Jeb Bush', correct: false },
      { text: 'Bill Nelson', correct: false }
    ]
  },
  {
    question: 'When did Florida become a State?',
    answers: [
      { text: '1990', correct: false },
      { text: '1845', correct: true },
      { text: '1620', correct: false },
      { text: '1788', correct: false }
    ]
  },
  {
    question: 'What is the Florida State Flower',
    answers: [
      { text: 'Carnation', correct: false },
      { text: 'Orange Blossom', correct: true },
      { text: 'Orchid', correct: false},
      { text: 'Rose', correct: false}
    ]
  }
]

var answered = [

]
console.log(answered)