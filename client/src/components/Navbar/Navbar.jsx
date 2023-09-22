import React, { useState } from 'react'

function Navbar() {

    const [activeLink, setActive] = useState([]);
    console.log(activeLink)

    const handleClickOnLink = (e) => {
        
        switch(e.target.id){
            case 'About':
                setActive([e.target.id])
            break;
            case 'Work':
                setActive([e.target.id])
            break;
            case 'Contact':
                setActive([e.target.id])
            break;
        }

    }

  return (
    <div className='flex bg-opacity-50 bg-gray-600 w-full md:w-fit place-content-between py-2 rounded-md px-5 z-50'>
      <div className='rounded-md border-black border px-3 py-2 md:mr-14'>
        <a href="/">Logo</a>
      </div>
      <div className='flex'>
        <div id='About' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'About' ? 'bg-secondary-color text-white font-bold' : null} rounded-md border-black border px-1 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:px-3 md:py-2`}>
            <span className='pointer-events-none'>w</span>
            <span className='pointer-events-none' href="/">About</span>
        </div>
        <div id='Work' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'Work' ? 'bg-secondary-color text-white font-bold' : null} mx-3 rounded-md border-black border px-1 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:mx-5 md:px-3 md:py-2`}>
            <span className='pointer-events-none'>w</span>
            <span className='pointer-events-none' href="/">Work</span>
        </div>
        <div id='Contact' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'Contact' ? 'bg-secondary-color text-white font-bold' : null}  rounded-md border-black border px-1 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:px-3 md:py-2`}>
            <span className='pointer-events-none'>w</span>
            <span className='pointer-events-none' href="/">Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;