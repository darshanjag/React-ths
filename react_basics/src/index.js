import ReactDOM from 'react-dom';
import React from 'react'
import Home from './components/home'
export class App extends React.Component {
    constructor(){
        super();
        this.state={
            homeLink:"home"
        }
    }
    onGreet(){
        alert("function called")
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink:newName
        });
    }
  render() {
    return (
      <div>
          <h1>{this.state.homeLink}</h1>
          <Home  greet={this.onGreet}
          
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
          />
      </div>
    )
  }
}

export default App


ReactDOM.render(<App />, document.getElementById('root'));
