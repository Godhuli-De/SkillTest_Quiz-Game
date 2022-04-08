
// const topic= document.getElementById("topic");
// const username= document.getElementById("username");
// const savedScore= document.getElementById("score");

// topic.innerText=localStorage.getItem('mostRecentTopic');
// username.innerText=localStorage.getItem('mostRecentUser');
// savedScore.innerText=localStorage.getItem('mostRecentScore');

var table = document.getElementById("scoretable");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);


cell1.innerHTML = localStorage.getItem('mostRecentTopic');
cell2.innerHTML = localStorage.getItem('mostRecentUser');
cell3.innerHTML = localStorage.getItem('mostRecentScore');
