alert("hello ,Welcome to the game of dice");
var randomnumber=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var setsrc="dice"+randomnumber+".png";
var setsrc2="dice"+randomnumber2+".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",setsrc);
var image2=document.querySelectorAll("img")[0];
image2.setAttribute("src",setsrc2);
