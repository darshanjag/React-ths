import React, { Component } from 'react'





export class Camper_list extends Component {
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

export default Camper_list
