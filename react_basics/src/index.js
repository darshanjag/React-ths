import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import Home from './components/home'
export class App extends Component {
    onGreet(){
        alert("function called")
    }
  render() {
    return (
      <div>
          <Home  greet={this.onGreet}/>
      </div>
    )
  }
}

export default App


ReactDOM.render(<App />, document.getElementById('root'));
