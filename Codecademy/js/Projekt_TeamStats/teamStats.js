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
    },
    addGame(newOppenent, newTeamPoints, newOppenentPoints) {
      const newGame = {
        opponent: newOppenent,
        teamPoints: newTeamPoints,
        opponentPoints: newOppenentPoints
      };
      this._games.push(newGame);
    }
  };
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
/*
[
  { firstName: 'John', lastName: 'Doe', age: 25 },
  { firstName: 'Jane', lastName: 'Smith', age: 28 },
  { firstName: 'Michael', lastName: 'Johnson', age: 30 },
  { firstName: 'Bugs', lastName: 'Bunny', age: 76 }
]
[
  { opponent: 'Team A', teamPoints: 20, opponentPoints: 15 },
  { opponent: 'Team B', teamPoints: 18, opponentPoints: 22 },
  { opponent: 'Team C', teamPoints: 25, opponentPoints: 20 },
  { opponent: 'Titans', teamPoints: 100, opponentPoints: 98 }
]
*/