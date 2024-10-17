import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import cross from '../assets/close.svg'

function Navbar() {

    const NavItems = ()=>{
        return(
            <ul className='nav-ul flex gap-4'>
                {["Home","About","Projects","Contact"].map((item,index)=>(
                    <li key={index} className='nav-li'>
                        <a href="/" className='nav-li_a text-neutral-200'> {item} </a>
                    </li>
                ))}

            </ul>
        )
    }

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen((prevIsOpen)=>!prevIsOpen)
    }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto px-5'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Akshay</a>
                <button onClick={toggle} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle menu'>
                     <img src={isOpen? cross:menu} alt="toggle" className='w-6 h-6' />
                </button>

                <nav className='sm:flex hidden'>
                    <NavItems/>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar