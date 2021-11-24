const username= document.getElementById("username");
const saveScoreBtn= document.getElementById("saveScoreBtn");
const finalScore=  document.getElementById("finalScore");
const mostRecentScore1= localStorage.getItem('mostRecentScore');
finalScore.innerText= mostRecentScore1;
console.log("Hurray! You scored :"+finalScore.innerText);

username.addEventListener('keyup', () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;

});

saveHighScore = (e) => {
    console.log("Clicked the Save Button");
    e.preventDefault();
};

