import React from 'react'
import { FaTrashAlt} from 'react-icons/fa'

function Comment(props) {
  return (
    <div className={props.color}>
        <p>{props.name}</p>
        <FaTrashAlt />
    </div>
  )
}

export default Comment