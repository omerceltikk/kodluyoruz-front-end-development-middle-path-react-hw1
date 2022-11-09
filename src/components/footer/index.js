import React from 'react'
import "./stylesFooter.css"

function Footer({itemCount, handleStatus,handleClear}) {
 
  return (
    <div className='footer'>
      <span>
        <p>{itemCount()}  {itemCount() > 1 ? "items" : "item"}</p>
       
      </span>
      <div className='buttons'>
        <button className='all' onClick={() => handleStatus("all")}>All</button>
        <button  className='all' onClick={() => handleStatus("active")}>Active</button>
        <button className='all' onClick={() => handleStatus("completed")}>Completed</button>
      </div>
      <p className='clear' onClick={handleClear}>Clear Completed</p>
    </div>
  )
}

export default Footer