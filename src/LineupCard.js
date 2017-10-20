import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';

class LineupCard extends Component{

  render(){
    console.log('props', this.props)
    return(
      <div>
        <Panel bsStyle="primary" header="Lineup Card">
          <ol className="starting-player">
            {this.props.starters.map((player) => (
              <li key={player.id} className="player-list-item">
                <div className="player-details">
                  <p>{player.name}</p>
                  <p>{player.position}</p>
                </div>
                <button className="contact-remove">
                  Remove 
                </button>
              </li>
            ))}
          </ol>
        </Panel>
      </div>
    )
  }
}

export default LineupCard