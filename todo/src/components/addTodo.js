import React, { Component } from 'react'

export class addTodo extends Component {
  render() {
    return (
     <form style={{display : 'flex'}}  >
         <input
         type="text"
         name="title"
         placeholder="addTodo"
         style={{flex:10,padding:'5px'}}
       />
    <input 
    type="submit"
    value="submit"
   className="btn"
   style={{flex:1}}   
    
    
    />

     </form>
    )
  }
}

export default addTodo
