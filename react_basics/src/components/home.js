import React, { Component } from 'react'

export class Home  extends Component {
  render() {
    return (
      <div>
        <h1>hello from home</h1>
        <button onClick={this.props.greet} className="btn btn-primary">greet</button>
      </div>
    )
  }
}

export default Home