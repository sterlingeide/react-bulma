import React, { Component } from 'react';

const basketballPlayer = {
    name: 'Steph Curry',
    team: 'Warriors'
  }
  const bballpayload = [
    {
      name: 'Basketball Player 2',
      team: 'Team 2'
    },
    {
      name: 'Basketball Player 3',
      team: 'Team 3'
    },
    {
      name: 'Basketball Player 4',
      team: 'Team 4'
    },
    {
      name: 'Basketball Player 5',
      team: 'Team 5'
    },
  ]
  
  const displayBasketballPlayers = bballpayload.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {player.name}</h1>
        <p>Team, {player.team}</p>
      </div>
    );
  });
  
  //an array of all players on team 4
  const searchTeam4 = bballpayload.filter((player, idx) => {
    if(player.team === 'Team 4') {
      return true;
    } else {
      return false;
    }
  });
  
  const displayTeam4 = searchTeam4.map((player, idx) => {
    return(
      <div key={idx}>
        <h1>Player, {player.name}</h1>
        <p>Team, {player.team}</p>
      </div>
    );
  });

class Basketball extends Component {
    render() {
        return (
            <div>
                <h1>Basketball</h1>
                <div>
                    <h1>Player, {basketballPlayer.name}</h1>
                    <p>Team {basketballPlayer.team}</p>
                </div>
                {displayBasketballPlayers}
                {displayTeam4}
            </div>
        )
    }
}

export default Basketball;
