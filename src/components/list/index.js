import React from 'react'
import "./liststyles.css"

function List({ contacts, handleComplete, status, removeItem }) {
  let Active =function() {
    
  }

  return (
    <div>
      <ul id='listElements'>
        {
          contacts.map((contact, i) => (
            <div key={i} className='start'>
              <div onClick={Active} className={contact.done ? "list click" : "list"}
              hidden ={status =="all" ? false: (status == "completed" && !contact.done) ? true : status == "active" && contact.done ? true : false} >
                <input  className="done" type="checkbox" checked={contact.done} onChange={()=> handleComplete(i)} />
                <li>{contact.todo}</li>
              </div>
              <div className='end'><button className='close btn' onClick={() => removeItem(i)}><i>X</i></button></div>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default List