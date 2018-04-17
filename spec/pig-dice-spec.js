import { Player } from './../src/backend.js';

describe('Player', function(){
  var newPlayer;
  var result;

  beforeEach(function() {
    newPlayer = new Player('player1', []);
    result = newPlayer.roll();
  });

  it('should create a new Player with a name and scorearray', function(){
    expect(newPlayer.name).toEqual('player1');
    expect(newPlayer.scorearray).toEqual([]);
  })

  it('should generate a dice roll from 1 to 6', function(){
    expect(result).not.toBeGreaterThan(6);
    expect(result).not.toBeLessThan(0);
  });

  it('should add 0 to turnscore if result === 1', function(){
    if (result === 1) {
      expect(newPlayer.turnScore).toEqual(0);
    }
  });

  it('should add result to the turnScore if result > 1', function(){
    if (result > 1) {
      expect(newPlayer.turnScore).toEqual(result);
    }
  });

  it('should push result of turnscore to scorearray', function(){
    let updateTurnScore = newPlayer.serialize();
    expect(newPlayer.turnScore).toEqual(result);
  });

  it('should add array elements to totalScore', function(){
    let newResult = newPlayer.roll();
    let updateTurnScore = newPlayer.serialize();
    let addPlayerScore = newPlayer.addup(newPlayer.scorearray);
    let playerSum = 0;
    console.log(newPlayer.scorearray)
    for (var i = 0; i < newPlayer.scorearray.length; i++) {
      playerSum += newPlayer.scorearray[i];
    }
    expect(newPlayer.totalscore).toEqual(playerSum);
  });
});
