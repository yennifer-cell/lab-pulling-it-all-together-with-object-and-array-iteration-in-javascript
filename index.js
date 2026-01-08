// -----------------------------
// Game Data
// -----------------------------
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Kemba Walker": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 7,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// -----------------------------
// Helper: All Players
// -----------------------------
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// -----------------------------
// Function Implementations
// -----------------------------

// 1️⃣ Points scored by player
function numPointsScored(playerName) {
  return allPlayers()[playerName].points;
}

// 2️⃣ Shoe size of player
function shoeSize(playerName) {
  return allPlayers()[playerName].shoe;
}

// 3️⃣ Team colors
function teamColors(teamName) {
  const game = gameObject();
  for (let key in game) {
    if (game[key].teamName === teamName) {
      return game[key].colors;
    }
  }
}

// 4️⃣ All team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 5️⃣ Player numbers for a team
function playerNumbers(teamName) {
  const game = gameObject();
  for (let key in game) {
    if (game[key].teamName === teamName) {
      return Object.values(game[key].players).map(player => player.number);
    }
  }
}

// 6️⃣ Player stats
function playerStats(playerName) {
  return allPlayers()[playerName];
}

// 7️⃣ Rebounds of player with biggest shoe
function bigShoeRebounds() {
  const players = allPlayers();
  let maxShoe = 0;
  let rebounds = 0;

  for (let player in players) {
    if (players[player].shoe > maxShoe) {
      maxShoe = players[player].shoe;
      rebounds = players[player].rebounds;
    }
  }

  return rebounds;
}

// 8️⃣ Player with most points
function mostPointsScored() {
  const players = allPlayers();
  let maxPoints = 0;
  let topPlayer = "";

  for (let player in players) {
    if (players[player].points > maxPoints) {
      maxPoints = players[player].points;
      topPlayer = player;
    }
  }

  return topPlayer;
}

// 9️⃣ Winning team
function winningTeam() {
  const game = gameObject();

  function teamPoints(team) {
    return Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
  }

  const homePoints = teamPoints(game.home);
  const awayPoints = teamPoints(game.away);

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// 🔟 Player with longest name
function playerWithLongestName() {
  const players = allPlayers();
  let longestName = "";

  for (let player in players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }

  return longestName;
}

// 1️⃣1️⃣ Does the player with longest name have most steals?
function doesLongNameStealATon() {
  const players = allPlayers();
  const longestNamePlayer = playerWithLongestName();
  let maxSteals = 0;

  for (let player in players) {
    if (players[player].steals > maxSteals) {
      maxSteals = players[player].steals;
    }
  }

  return players[longestNamePlayer].steals === maxSteals;
}

// -----------------------------
// Testing Outputs (Optional)
// -----------------------------
console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson")); // 22
console.log("Shoe size of Mason Plumlee:", shoeSize("Mason Plumlee")); // 19
console.log("Colors of Charlotte Hornets:", teamColors("Charlotte Hornets")); // ['Turquoise', 'Purple']
console.log("All team names:", teamNames()); // ['Brooklyn Nets', 'Charlotte Hornets']
console.log("Player numbers for Brooklyn Nets:", playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]
console.log("Stats for Ben Gordon:", playerStats("Ben Gordon")); // {number: 8, shoe: 15, points: 33, ...}
console.log("Rebounds of player with biggest shoe:", bigShoeRebounds()); // 12
console.log("Player with most points:", mostPointsScored()); // Ben Gordon
console.log("Winning team:", winningTeam()); // Brooklyn Nets (or Charlotte Hornets depending on data)
console.log("Player with longest name:", playerWithLongestName()); // "Bismack Biyombo"
console.log("Does the player with longest name have most steals?", doesLongNameStealATon()); // true or false

