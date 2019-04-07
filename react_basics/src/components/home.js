import React, { Component } from 'react'

export class Home  extends Component {
    constructor(props){
        super(props)
        this.state={
            homeLink:"changed link"
        }
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }
  render() {
    return (
      <div>
        <h1>hello from home</h1>
        <button onClick={this.props.greet} className="btn btn-primary">greet</button>
        <button onClick={this.onChangeLink.bind(this)}>link changer</button>
      </div>
    )
  }  
}

export default Home