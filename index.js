function outPut(){

let randomChoice1=Math.floor(Math.random()*6)+1 //1-6 integer number
  let picRandom1= `dice${randomChoice1}.png`; //dice5.png
  let randomSource1="diceimg/"+picRandom1;//diceimg/dice5.png
  document.querySelectorAll("img")[0].setAttribute("src",randomSource1);//choose the image in the index 0and change its src attributes from dice6 to random dice
let randomChoice2=Math.floor(Math.random()*6)+1;//repeat the ame things to get the random choice for the next image
let picRandom2=`dice${randomChoice2}.png`
let randomSource2=`diceimg/${picRandom2}`;
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);
if(randomChoice1>randomChoice2){//set the condition that if the randomChoice1 greater than 2 then do something
  document.querySelectorAll("h1")[0].innerHTML="🚩player1 is the winner";// if the condition is true change the h1 to player1 is the winner
}
else if(randomChoice2>randomChoice1){
    document.querySelectorAll("h1")[0].innerHTML="🚩player2 is the winner";
}
else{
  document.querySelectorAll("h1")[0].innerHTML="🎲Tie";
}
}
