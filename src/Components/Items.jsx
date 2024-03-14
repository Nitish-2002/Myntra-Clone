import React from 'react'
import "../scss/Navbar.scss"
export default function Items(props) {
  return (
    <div key={props.each.id} className="navbar__items__cat" >{props.each.name}</div>

  )
}
