import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types'
import shortid from 'shortid';

class LineupCard extends Component{

  render(){
  

    return(
      <div>
        <Panel bsStyle="primary" header="Starting Lineup">
          <ol className="starting-player">
            {this.props.starters.map((player) => (
              <li key={player.number} className="player-list-item">
                <div className="player-details">
                  <p>{player.name}</p>
                  <p>{player.position}</p>
                </div>
                <button onClick={() => this.props.onDeletePlayer(player) } className="contact-remove">
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


LineupCard.PropTypes = {
  onDeletePlayer : PropTypes.func.isRequired,
  starters: PropTypes.array.isRequired,
}

export default LineupCard