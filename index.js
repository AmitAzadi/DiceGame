var randomnumber1=Math.floor(Math.random()*6)+1;
var imagesource1="images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesource1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var imagesource2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);

if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="Player1 wins!";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="Player2 wins!";
else
document.querySelector("h1").innerHTML="Draw!";
