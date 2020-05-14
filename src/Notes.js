  
import React from 'react';
import './Notes.css';


function Notes(props){
    const items = props.items;
    const listItems = items.map(item =>{
   
       return (
        <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>               
                <span>
                    <i className="fa fa-times " onClick={()=>{props.deleteItem(item.key)}} /> 
                </span>
            </p>
        
       </div>);
       })
    return ( 
        <div>       
            {listItems}   
        </div>
           );
   
  }

  export default Notes;