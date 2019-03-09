import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = ()=>{
    return{
      background: '#f4f4f4',
      padding :'10x',
      borderBottom: '1px ccc dotted',
      textDecoration: this.props.todo.completed ? 
      'line-through':'none'
    }
    
    
  }
  render() {
    const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
      <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input>
      {' '}
       <p>{title}</p> 
      </div>
    )
  }
}
TodoItem.propTypes ={
  todo: propTypes.object.isRequired
}

export default TodoItem
