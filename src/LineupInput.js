import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import serializeForm from 'form-serialize'

class LineupInput extends Component{

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    console.log(values)
    if(this.props.onPlayerCreate)
      this.props.onPlayerCreate(values)
  }


  render(){
  

    return(
      <div className="input-Container">
        <form onSubmit={this.handleSubmit} className="create-player-form">
            <div className="inputFields">
              <input placeholder="name" name="name" type="text"/>
              <input placeholder="position" name="position" type="text" />
              <Button bsStyle="primary" type="submit">Submit</Button>
            </div>
        </form>  
      </div>
    )
  }
}


export default LineupInput;