class Turn{
  constructor(userGuess, card){
    this.guess = userGuess;
    this.card = card;
  }
  returnGuess(){
    return this.guess
  }
  returnCard(){
    return this.card
  }
  evaluateGuess(){
    return this.guess === this.card.correctAnswer
    }
  giveFeedback(){
    if(this.guess === this.card.correctAnswer){
      this.guess = true;
      return 'correct! 🥳'
    }
    return 'incorrect 😢';
  }
};

module.exports = Turn;
