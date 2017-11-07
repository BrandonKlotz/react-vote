import React, { Component } from 'react';

class GraphBar extends Component {

    render() {

      return (
        <div className="GraphWrapper">
          <div className="GraphBarContainer">
            <div className="GraphBar" style={{height:this.props.height*10+"px"}}><p>{this.props.height}</p></div>
            <div><h2>{this.props.label}</h2></div>
          </div>
        </div>
      );
    }
}


export default GraphBar;
