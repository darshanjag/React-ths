import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/SearchBar';
const API_KEY = "AIzaSyAB_CN30ouaEgNLLx4FgVhOz8c1wBjJedk"

class App extends Component{
    constructor(props){
        super(props);
        this.state={videos:[]};
        YTSearch({key:API_KEY,term:"elon musk"},(videos)=>{
            this.setState({videos})
        })
    }
    render(){
        
        return(
            <div>
            <SearchBar />
            <video_list_item videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

 

