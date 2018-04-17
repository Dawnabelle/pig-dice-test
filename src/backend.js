export function Player (name, scorearray){
  this.name = name;
  this.turnscore = 0;
  this.scorearray = scorearray;
  this.totalscore = 0;
}

 Player.prototype.roll = function() {
  var result = Math.floor((Math.random() * 6) + 1);
   if (result === 1){
     this.turnscore = 0;
   }else {
     this.turnscore += result;
   }
 }

Player.prototype.serialize = function() {
  this.scorearray.push(this.turnscore);
  this.turnscore = 0;
}

Player.prototype.addup = function(array){
  this.totalscore = 0;
  for (var i = 0; i < array.length; i++) {
    this.totalscore += array[i];
  }
  return this.totalscore;
}
