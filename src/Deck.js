class Deck{
  constructor(flashCards){
    this.cards = flashCards;
  }
  countCards(){
    return this.cards.length;
  }
};

module.exports = Deck;
