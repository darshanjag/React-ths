import React, { Component } from 'react'

export class Home  extends Component {
    constructor(props){
        super()
        this.state={
            homeLink: props.initialLinkName
        }
    }
    onChangeLink(){

        this.props.changeLink(this.state.homeLink);
    }
    onChangeHandler(event){
        this.setState({
            homeLink: event.target.value
        });
    }
  render() {
    return (
      <div>
        <h1>hello from home</h1>
        <button onClick={this.props.greet} className="btn btn-primary">greet</button>
        <input type="text" value={this.props.homeLink.bind(this)} onChange={(event)=>this.onChangeHandler(event)}></input>
        <button onClick={this.onChangeLink.bind(this)}>link changer</button>
      </div>
    )
  }  
}

export default Home