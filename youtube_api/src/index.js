import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/SearchBar';
const API_KEY = "AIzaSyAB_CN30ouaEgNLLx4FgVhOz8c1wBjJedk"

class App extends Component{
    state={
        search:YTSearch({key: API_KEY, term:"elonmusk"},function(data){
            console.log(data);
            return(data);
          })
        }
    render(){
        
        return(
            <div>
            <SearchBar />
            <video_list_item search={this.state.search}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

 

