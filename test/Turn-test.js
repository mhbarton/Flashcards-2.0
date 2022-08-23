const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', () =>{
  let card;
  let turn;
  let turn2;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card)
    turn2 = new Turn('function', card)
  });

it('should be a function', () =>{
  expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', () =>{
  expect(turn).to.be.an.instanceOf(Turn);
});

it('should return the user\'s guess', () =>{
  expect(turn.returnGuess()).to.equal('object');
});

it('should return a card', () =>{
  expect(turn.returnCard()).to.equal(card)
});

it('should evaluate the user\'s guess', () =>{
  expect(turn.evaluateGuess()).to.equal(true)
});

it('should give the user feedback', () =>{
  expect(turn.giveFeedback()).to.equal('correct! 🥳')
  expect(turn2.giveFeedback()).to.equal('incorrect 😢')
});

});
