import React, { Component } from 'react';

const soccerPlayer = {
    name: 'Lionel Messi',
    team: 'PSG'
  }
  const soccerPayload = [
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
  
  const displaySoccerPlayers = soccerPayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Soccer Player, {player.name}</h1>
        <p>Team, {player.team}</p>
      </div>
    );
  });

class Soccer extends Component {
    render() {
        return (
            <div>
                <h1>Soccer</h1>
                <div>
                    <h1>{soccerPlayer.name}</h1>
                    <p>{soccerPlayer.team}</p>
                </div>
                {displaySoccerPlayers}
            </div>
        )
    }
}

export default Soccer;