import React, {Component} from "react";


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"the entered text is:",
            keywords:""
        }
    }
    
    inputChangeHandler(event){
        this.setState({
            keywords:event.target.value
        })
    }
    render(){
        return(
            <div>
           <input type="text" onChange={this.inputChangeHandler.bind(this)}/>
            <div>{this.state.title}</div>
            <div>{this.state.keywords}</div>            
            </div>

        )
        }
}



export default SearchBar;