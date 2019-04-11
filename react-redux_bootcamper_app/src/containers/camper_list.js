import React, { Component } from 'react'
import {connect} from 'react-redux'





 class Camper_list extends Component {
    renderList(){
        return this.props.campers.map((camper)=>{
            return <li key={camper.name} className="list-group-item">{camper.name}</li>

        })
    }





  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    return{
        camper: state.camper
    };
    
}

export default connect(mapStateToProps)(Camper_list)
