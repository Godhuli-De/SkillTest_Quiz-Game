var head = document.getElementsByTagName('body')[0];
var js = document.createElement("script");


js.type = "text/javascript";
// js.src="game.js";

console.log("in controls file");
var topicselected=localStorage.getItem('mostRecentTopic');
console.log("in controls lets validate"+topicselected);

var heading=document.getElementById("scriptType");
heading.innerHTML=topicselected+" Quiz";

if (topicselected =="JavaScript")
{
    console.log("in controls");
    // js.src = "js/game.js";
    js.src="game.js";
    console.log("in controls");
}
else if(topicselected =="React")
{
    console.log("in react controls");
    js.src = "reactq.js";
    console.log("in controls");
}
else {
    js.src = "/java.js";
}

head.appendChild(js);
console.log("js:"+js);
console.log("head:"+head);