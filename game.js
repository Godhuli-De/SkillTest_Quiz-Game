console.log("Hello world from Game");
const question= document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
//const questionCounterText=document.getElementById("questionCounter");
const progressText = document.getElementById("progressText");
const scoreText=document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion={};
let acceptingAnswers= true;
let score= 0;
let questionCounter =0;
let availableQuestions= [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
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

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        console.log("end score"+score);
        localStorage.setItem("mostRecentScore", score);        
        console.log("Localstorage"+localStorage.getItem('mostRecentScore'));
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    console.log(questionCounter/MAX_QUESTIONS);
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    console.log(currentQuestion.question);
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        console.log(selectedChoice);
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedChoice.dataset['number']);
        console.log(selectedAnswer , currentQuestion.answer);

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        console.log(classToApply);

        if (classToApply==="correct") {
            incrementScore(CORRECT_BONUS);
            console.log("current score is "+score);
        }


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000  );
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();