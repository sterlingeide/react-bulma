import React, { Component } from 'react';

const footballPlayer = {
    name: 'Tom Brady',
    team: 'Buccaneers'
  }
  const footballpayload = [
    {
      name: 'Player 2',
      team: 'Team 2'
    },
    {
      name: 'Player 3',
      team: 'Team 3'
    },
    {
      name: 'Player 4',
      team: 'Team 4'
    },
    {
      name: 'Player 5',
      team: 'Team 5'
    },
  ]
  
  const displayFootballPlayers = footballpayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Football Player, {player.name}</h1>
        <p>Team, {player.team}</p>
      </div>
    );
  });

class Football extends Component {
    render() {
        return (
            <div>
                <h1>Football</h1>
                <div>
                    <h1>{footballPlayer.name}</h1>
                    <p>{footballPlayer.team}</p>
                </div>
                {displayFootballPlayers}
            </div>
        )
    }
}

export default Football;