import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import "../style/ToDo.css"


function ToDo() {
  return (
  <div className='container'>
    <form action="">
      <div className="header">
        <div className="text">My ToDo List</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <FontAwesomeIcon className='custom-icon-class' icon={faList} />
          <input type="text" placeholder='What are you supposed to do?'/>
        </div>
      </div>
      <div className="back">Back to <span> <Link to='/'> Login </Link> </span>  </div>
      <div className="submit-container">
        <button className="submit"> Add Item </button>
      </div>
    </form>
  </div>
  )
}

export default ToDo