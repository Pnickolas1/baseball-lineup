import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types'

class LineupCard extends Component{

  render(){
  




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