

let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let sumEl=document.getElementById('sum-el')
let messageEL=document.querySelector('#message-el')
let cardEl=document.getElementById('cards-el')
let playerEl=document.getElementById('player-el')

let player={
    name:"Fitha",
    chips:145
    

}

playerEl.textContent=player.name +":$"+ player.chips

function  getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber===1){
       return 11
    }
    else if(randomNumber>10){
    return 10
    }
    else{

        return randomNumber
    }
}

function startGame(){
    isAlive=true
    firstCard =getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}



function renderGame(){
    cardEl.textContent="cards:"
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+ " "

    }
sumEl.textContent="sum:" +sum
if (sum<=20){
messageEL.textContent="Do u want to draw a number?"

}
else if(sum===21){
     messageEL.textContent="Wohoo You've got blackjack"
        hasBlackJack=true

    }
    else{
       messageEL.textContent="You're out of  the game"
        isAlive=false
    }


}

function newCard(){
    if (isAlive === true  && hasBlackJack===false){
   let card=getRandomCard()
   sum+=card
   cards.push(card)
   console.log(cards)
   renderGame()
}
}