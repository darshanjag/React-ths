import React, { Component } from 'react';
import  {BrowserRouter, Route, Link} from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <header>
      <Link to="/">Home</Link><br/>
      <Link to="/posts">Posts</Link><br/>
      <Link to="/profile">Profile</Link><br/>
      <hr/>

      </header>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/profile" component={Profile}/>
       

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
