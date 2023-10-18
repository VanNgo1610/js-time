var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var hourNow = today.getHours(); 
var greeting;

document.getElementById("dnt").innerHTML = dateTime;

if(hourNow>18){
    greeting = "Good evening";
}
else if(hourNow>12){
    greeting = "Good Afternoon";
}
else{
    greeting = "Good Morning";
}

document.getElementById("dnt").style.fontSize = "20px";
document.write('<h3>' + greeting + '</h3>')