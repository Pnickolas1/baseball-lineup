import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class LineupInput extends Component{

  render(){

    return(
      <div className="input-Container">
        <form>
          <p className="input-text-tag">Enter Player</p>
          <div className="inputFields">
            <input
              placeholder="name"
            />
          </div>

          <div className="inputFields"> 
            <input
              placeholder="position"
            />
          </div>
          <div className="btnHolder ">
          <Button
            bsStyle="primary"
            type="submit"
          >Submit</Button>
          </div>
        </form>  
      </div>
    )
  }
}


export default LineupInput;