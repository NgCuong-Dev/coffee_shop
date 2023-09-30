import React from 'react'
import Menu from './Menu.js'
import UserMenu from './UserMenu.js'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header w-full h-20 mx-auto items-center flex justify-between '>
      <NavLink to={'/'}>
        <img className='object-fit pl-10' src="/images/logo.png" alt="" width={150} height={150} />
      </NavLink>
        <Menu/>
        <UserMenu/>
        
    </div>
  )
}
