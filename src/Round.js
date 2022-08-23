const Turn = require('../src/Turn');

class Round{
  constructor(deck){
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
   }
   returnCurrentCard(){
     return this.currentCard = this.deck[this.turns]
  };
  takeTurn(guess){
    let turn = new Turn(guess, this.currentCard)
    if (!turn.evaluateGuess()) {
    this.incorrectGuesses.push(this.currentCard.id);
  }
    this.turns ++;
    this.returnCurrentCard();
    return turn.giveFeedback();
  }
  calculatePercentCorrect(){
    let correctAnswers = this.turns - this.incorrectGuesses.length;
    let percentCorrect = parseInt((correctAnswers / this.turns) * 100);
    return percentCorrect;
  }

  endRound(){
    let endMessage = `** The round is over! ** You have answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.timeLog('Your Game Run Time')
    console.log(endMessage)
    return endMessage;
  }
};



module.exports = Round;
