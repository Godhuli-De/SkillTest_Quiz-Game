const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScorebtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore1 = localStorage.getItem("mostRecentScore");
const savedMsg = document.getElementById("savedMsg");
if (mostRecentScore1 > 0)
  finalScore.innerText = "Hurray! You scored : " + mostRecentScore1;
else
  finalScore.innerText =
    "Oops! You scored : " + mostRecentScore1 + "\n Better luck next time ☹";
console.log("Hurray! You scored :" + finalScore.innerText);

username.addEventListener("keyup", () => {
  console.log(username.value);
  console.log("Hello");
  localStorage.setItem("mostRecentUser", username.value);
  console.log("Localstorage" + localStorage.getItem("mostRecentUser"));
  //go to the end page
  // saveScoreBtn.disabled = !username.value;
  if (username.value) {
    console.log("in truue");
    saveScoreBtn.disabled = false;
  }
});

saveHighScore = (e) => {
  console.log("Clicked the Save Button");
  e.preventDefault();
  savedMsg.innerText =
    "Username : " + localStorage.getItem("mostRecentUser") + " is Saved!!";
  // var username=username.value;
};
