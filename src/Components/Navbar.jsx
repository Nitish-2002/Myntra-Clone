import React from 'react'
import Logo from '../images/logo.png'
import NavbarObj from '../Objects/NavbarObj'
import Items from './Items'
import "../scss/Navbar.scss"
export default function Navbar() {
  return (
    <div className="navbar">
      <div className='navbar__flex'>
      <div className='navbar__image'>
        <img src={Logo} alt="" className='image' />
      </div>
      <div className="navbar__items" >
        {
          NavbarObj.map((each) => (
            <Items each={each} key={each.id}/>
          ))
        }
      </div>
      </div>
      <div className='navbar__flex'>
      <div className='navbar__search'>
        <input type="text" placeholder='Search for the products,brands and more'/>
      </div>
      <div className='navbar__things'>
         <p> Watchlist</p>
         <p>Bag</p>
      </div>
      </div>
    </div>
  )
}
