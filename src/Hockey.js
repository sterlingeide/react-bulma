import React, { Component } from 'react';

const hockeyPlayer = {
    name: 'Bo Horvat',
    team: 'Canucks'
  }
  const hockeyPayload = [
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
  
  const displayHockeyPlayers = hockeyPayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Hockey Player, {player.name}</h1>
        <p>Team, {player.team}</p>
      </div>
    );
  });

class Hockey extends Component {
    render() {
        return (
            <div>
                <h1>Hockey</h1>
                <div>
                    <h1>{hockeyPlayer.name}</h1>
                    <p>{hockeyPlayer.team}</p>
                </div>
                {displayHockeyPlayers}
            </div>
        )
    }
}

export default Hockey;