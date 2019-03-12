import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// Adding the default Component to our App component.
class App extends React.Component {
 render() {
  return(
    <div> Hello</div>
 );
 }
}

// Rendering our App Component.
ReactDOM.render(<App />, document.getElementById("app"));
