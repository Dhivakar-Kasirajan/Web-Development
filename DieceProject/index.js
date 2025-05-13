//player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

//player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1 === randomNumber2)
{
    //draw
    document.querySelector("h1").textContent="Draw!";
}
if(randomNumber1 > randomNumber2)
{
    // player 1 won
    document.querySelector("h1").innerHTML="🚩player 1 has won the game";
}
if(randomNumber1 < randomNumber2)
{
    //player 2 won
    document.querySelector("h1").innerHTML="player 2 has won the game 🚩";
}