/*
GAME'S RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer
scores = [0,0]
roundScore = 0
activePlayer = 1

//document.querySelector('#current-'+ activePlayer).textContent=dice
//document.querySelector('#current-'+ activePlayer).innerHTML='<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent
document.querySelector('.dice').style.display = 'none'

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', function(){
    // here is the Random Number
    var dice = Math.floor(Math.random() * 6) + 1
    // display the result
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + dice + '.png'
    // Update the round score IF the rolled number was Not a 1
    if( dice !== 1){
        //add score
        roundScore = roundScore + dice
        document.querySelector('#current-'+ activePlayer).textContent= roundScore
    }else{
    nextPlayer()
    }
})

document.querySelector('.btn-hold').addEventListener('click' , function(){
    // add current score to global score
    scores[activePlayer] += roundScore
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    // check if player won the game
    if(score[activePlayer] >= 10){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.Add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    }else{
        nextPlayer()
    }
    // just calling another function to the next player
   nextPlayer()
})
 
function nextPlayer(){
      // next player
     // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
      // the same from the top
      if(activePlayer === 0){
          activePlayer = 1
      }else{
          activePlayer = 0
      } 

      roundScore = 0 
      document.getElementById('current-0').textContent = '0'
      document.getElementById('current-1').textContent = '0'

      document.querySelector('.player-0-panel').classList.toggle('active')
      document.querySelector('.player-1-panel').classList.toggle('active')

      //document.querySelector('.player-0-panel').classList.remove('active')
      //document.querySelector('.player-1-panel').classList.add'active')

      document.querySelector('.dice').style.display = 'none'
}