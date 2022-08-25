const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () =>{
  let game = new Game();

it('should be a function', () =>{
  expect(Game).to.be.a('function');
});

it('should be an instance of Game', () =>{
  expect(game).to.be.an.instanceOf(Game);
});

it('should keep track of the user\'s current round', () =>{
  expect(game.currentRound).to.be.an.instanceOf(Round)
});

});
