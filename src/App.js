import React, { Component } from 'react';
import GraphBar from './GraphBar.js';
import Graph from './Graph.js';
import './index.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    vanilla: 0,
    chocolate: 0,
    neo: 0
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <div className="GraphBarContainer">
            <GraphBar label="vanilla" height={this.state.vanilla} />
            <GraphBar label="chocolate" height={this.state.chocolate} />
            <GraphBar label="neopolitan" height={this.state.neo} />
          </div>

          <div className="btns">
              <button onClick={this.addVanillaCount.bind(this)}>Vanilla</button>
              <button onClick={this.addChocolateCount.bind(this)}>Chocolate</button>
              <button onClick={this.addNeoCount.bind(this)}>Neopolitan</button>
          </div>
        </div>
      </div>


     );
  }

  addVanillaCount(){
    this.setState(prevState => ({ vanilla: prevState.vanilla + 1 }));
  }

  addChocolateCount(){
    this.setState(prevState => ({ chocolate: prevState.chocolate + 1 }));
  }

  addNeoCount(){
    this.setState(prevState => ({ neo: prevState.neo + 1 }));
  }
}

export default App;
