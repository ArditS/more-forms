import React from 'react'
import style from './List.module.css'

function List({users, setUsers}) {
  const handleDelete = (index) => {
    const updatedUsers = [];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  }

  return (
    <ul className={style.li}>
      {users.map((item, index) => (
        <li key={index}>
          firstName: {item.firstName}
          email: {item.email}
          <button 
          onClick={() => handleDelete(index)} >Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default List
