const team = {
    _players: [
      {firstName: 'John', lastName: 'Doe', age: 25},
      {firstName: 'Jane', lastName: 'Smith', age: 28},
      {firstName: 'Michael', lastName: 'Johnson', age: 30}
    ],
    _games: [
      {opponent: 'Team A', teamPoints: 20, opponentPoints: 15},
      {opponent: 'Team B', teamPoints: 18, opponentPoints: 22},
      {opponent: 'Team C', teamPoints: 25, opponentPoints: 20}
    ],
    get players() {
         return this._players;
    },
    get games() {
         return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    }
  
};