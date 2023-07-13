import React from 'react'
import { Troller } from './images'

export const Navbar = () => {
  return (
    <div className="navbar">
          <img className='troller' src={Troller} alt="" />
          <h1 className='heading'>Meme Generator</h1>
          <p className='sub-heading'>React Course - Project 3</p>
     </div>
  )
}
