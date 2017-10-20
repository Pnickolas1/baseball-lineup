import React, { Component } from 'react'
import { Panel } from 'react-bootstrap';

class LineupCard extends Component{

  render(){

    console.log('props', this.props)
    return(
      <div>
        <Panel header="Lineup Card">
          <p> this is a test </p>
        </Panel>
      </div>
    )
  }
}

export default LineupCard