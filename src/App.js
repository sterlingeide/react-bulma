import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

//Components
import Racing from './Racing';
import Basketball from './Basketball';
import Football from './Football';
import Soccer from './Soccer';
import Hockey from './Hockey';
import Cover from './cover';
import Login from './Login';
import Contact from './Contact';
import Absurd from './Absurd';
import Forum from './Forum';

// const student = {
//   name: 'Bob',
//   class: 'SEI 1025',
//   semester: 'Winter',
// }


// function App() {
//   let school = 'UK';
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div>
//         <h1>{student.name}</h1>
//         <p>{student.class}</p>
//         <p>{student.semester}</p>
//         <p>{school}</p>
//       </div>
//       <div>
//         {(student.name === 'Bob' ? student.class = 'Art' : student.class = 'SEI')}
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////

//functional component -> made out of a function
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   )
// }

////////////////////////////////////////////////////////////////////////////

//class component -> made out of a class

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hi</h1>
//       </div>
//     )
//   }
// }

//////////////////////////////////////////////////////////////////
 //racing
// const driver = {
//   name: 'Lewis Hamilton',
//   team: 'Mercedes'
// }
// const payload = [
//   {
//     name: 'Driver 2',
//     team: 'Team 2'
//   },
//   {
//     name: 'Driver 3',
//     team: 'Team 3'
//   },
//   {
//     name: 'Driver 4',
//     team: 'Team 4'
//   },
//   {
//     name: 'Driver 5',
//     team: 'Team 5'
//   },
// ]

// const displayDrivers = payload.map((driver, idx) => {
//   return(
//     <div key={idx}>
//       <h1>Driver, {driver.name}</h1>
//       <p>Team, {driver.team}</p>
//     </div>
//   );
// });

 //basketball
// const basketballPlayer = {
//   name: 'Steph Curry',
//   team: 'Warriors'
// }
// const bballpayload = [
//   {
//     name: 'Basketball Player 2',
//     team: 'Team 2'
//   },
//   {
//     name: 'Basketball Player 3',
//     team: 'Team 3'
//   },
//   {
//     name: 'Basketball Player 4',
//     team: 'Team 4'
//   },
//   {
//     name: 'Basketball Player 5',
//     team: 'Team 5'
//   },
// ]

// const displayBasketballPlayers = bballpayload.map((player, idx) => {
//   return(
//     <div key={idx}>
//       <h1>Player, {player.name}</h1>
//       <p>Team, {player.team}</p>
//     </div>
//   );
// });

// //an array of all players on team 4
// const searchTeam4 = bballpayload.filter((player, idx) => {
//   if(player.team === 'Team 4') {
//     return true;
//   } else {
//     return false;
//   }
// });

// const displayTeam4 = searchTeam4.map((player, idx) => {
//   return(
//     <div key={idx}>
//       <h1>Player, {player.name}</h1>
//       <p>Team, {player.team}</p>
//     </div>
//   );
// });

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Driver {driver.name}</h1>
//         <p>Team {driver.team}</p>
//         <div>
//           {displayDrivers}
//         </div>
//         <h1>Player {basketballPlayer.name}</h1>
//         <p>Team {basketballPlayer.team}</p>
//         <div>
//           {displayBasketballPlayers}
//           <div>
//             {displayTeam4}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

//////////////////////////////////////////////////////////////////
//import the functions from other files

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Racing />
        <Basketball />
        <Football />
        <Soccer />
        <Hockey /> */}
        {/* <Cover /> */}
        {/* <Login /> */}
        {/* <Contact /> */}
        {/* <Absurd /> */}
        <Forum />
      </div>
    )
  }
}


export default App;