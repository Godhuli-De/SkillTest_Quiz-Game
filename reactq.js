const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
//const questionCounterText=document.getElementById("questionCounter");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
// const headertext = document.getElementById("react");
// headertext.innerText = "React.JS";
console.log("in react.js");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const topicselected = localStorage.getItem("mostRecentTopic");
console.log("in react.js lets validate" + topicselected);

var heading=document.getElementById("scriptType");
heading.innerHTML=topicselected+" Quiz";

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

//React
let questions_react = [
  {
    question: "Which of the following is not a disadvantage of React.js?",
    choice1:
      "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
    choice2: "The library of React.js is pretty large.",
    choice3: "The JSX in React.js makes code easy to read and write.",
    choice4: "The learning curve can be steep in React.js",
    answer: 3,
  },
  {
    question:
      "Which of the following command is used to install create-react-app?",
    choice1: "npm install -g create-react-app",
    choice2: "npm install create-react-app",
    choice3: "npm install -f create-react-app",
    choice4: "install -g create-react-app",
    answer: 1,
  },
  {
    question:
      "How many numbers of elements a valid react component can return?",
    choice1: "1",
    choice2: "2",
    choice3: "4",
    choice4: "5",
    answer: 1,
  },
];
//java qstn
let questions_java = [
    {
        question: 'Arrays in java are-',
        choice1: 'Object references',
        choice2: 'Objects',
        choice3: 'Primitive data type',
        choice4: 'None',
        answer: 2,
    },
    {
        question:"What is the size of float and double in java?",
        choice1: "32 and 64",
        choice2: "32 and 32",
        choice3: "64 and 72",
        choice4: "64 and 64",
        answer: 1,
    },
    {
        question: "When an array is passed to a method, what does the method receive?",
        choice1: "The reference of array",
        choice2: "Copy of array",
        choice3: "Length of array",
        choice4: "Duplicate array",
        answer: 1,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
availableQuesions = [];
startGame = () => {
  questionCounter = 0;
  score = 0;
  if (topicselected == "React") {
    console.log("in IFFF");
    availableQuestions = [...questions_react];
  }
  else if(topicselected == "JavaScript"){
    console.log("in IFFF");
    availableQuestions = [...questions];
  }
  else {
    console.log("in IFFF JAVA");
    availableQuestions = [...questions_java];
  }
  console.log("Avail qstns:" + availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    console.log("end score" + score);
    localStorage.setItem("mostRecentScore", score);
    console.log("Localstorage" + localStorage.getItem("mostRecentScore"));
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  console.log(questionCounter / MAX_QUESTIONS);
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  console.log(currentQuestion.question);
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    console.log(selectedChoice);
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedChoice.dataset["number"]);
    console.log(selectedAnswer, currentQuestion.answer);

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    console.log(classToApply);

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
      console.log("current score is " + score);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
