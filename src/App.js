import './App.css';
import React from 'react';
import Profil from './component/Profil';

//Transforming the App.js into a class-based component

class App extends React.Component{

  constructor(){
    super()
    this.state={

      show: false
    }
  }
  render(){
    return(
      // Adding a button that toggles the show state.
      <div>
        <button onClick={()=> this.setState({show : !this.state.show})}>{this.state.show === true ? "Hide" : "Show"}</button>
        {
          this.state.show === true && <Profil/>
        }
      </div>
    )
  }
}


export default App;
