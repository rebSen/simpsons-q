import React, { Component } from "react";
import logo from "./logo.svg";
import logow from "./logo_w.svg";

import "./App.css";

// import Quote from "./Quote";
import Quotes from "./Quotes";
// import Lamp from "./Lamp";
// import Working from "./Working";

class App extends Component {
  constructor() {
    super();
    this.state = {
        heWorks: true
    }
  }

  doSome = () => {
    this.setState({ 
      heWorks: !this.state.heWorks
    });
    console.log('blabla')
    }


  render() {
    const change = this.state.heWorks ? logo : logow;
    const pause = this.state.heWorks ? 'App-logo' : 'App-logo-transf';
    const changeText = this.state.heWorks ? 'Il travaille' : 'Il travaille pô';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
          <img src={change} className={`${pause}`} alt="logo" />
          
        </header>
       
        {/* <Lamp /> */}

        <button onClick={ () => this.doSome()} className="workButton"> {changeText} </button>
       
        <Quotes/>

      
    
      </div>
   
    )
  }
}

export default App;