import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar({setActive, activeLink, setInterescting, sectionContact, sectionAbout, sectionWork, sectionHero, isIntersecting}) {

    console.log(activeLink)

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
       });
    };

    useEffect(() => {

    }, [])

    const handleClickOnLink = (e) => {
        
        switch(e.target.id){
            case 'About':
                setActive([e.target.id])
                setInterescting('')
                scrollToSection(sectionAbout)
            break;
            case 'Work':
                setActive([e.target.id])
                setInterescting('')
                scrollToSection(sectionWork)
            break;
            case 'Contact':
                setActive([e.target.id])
                setInterescting('')
                scrollToSection(sectionContact)
            break;
            case 'Hero':
                setActive([e.target.id])
                setInterescting('')
                scrollToSection(sectionHero)
            break;
        }

    }

  return (
    <div className='flex bg-opacity-50 bg-gray-600 w-full md:w-fit place-content-between py-2 rounded-md px-5 z-50'>
      <div id='Hero' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'Hero' || isIntersecting == 'Hero' ? 'bg-secondary-color text-white font-bold' : null}  rounded-md border-black border px-1 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:px-3 md:py-2 md:mr-14`}>
        <span className='pointer-events-none' href="/">Home</span>
      </div>
      <div className='flex'>
        <div id='About' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'About' || isIntersecting == 'About' ? 'bg-secondary-color text-white font-bold' : null} rounded-md border-black border px-2 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:px-3 md:py-2`}>
            <span className='pointer-events-none mr-3'><FontAwesomeIcon icon={faCircleInfo} /></span>
            <span className='pointer-events-none' href="/">About</span>
        </div>

        <div id='Work' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'Work' || isIntersecting == 'Work' ? 'bg-secondary-color text-white font-bold' : null} mx-3 rounded-md border-black border px-2 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:mx-5 md:px-3 md:py-2`}>
            <span className='pointer-events-none mr-3'><FontAwesomeIcon icon={faSuitcase} /></span>
            <span className='pointer-events-none' href="/">Work</span>
        </div>
        <div id='Contact' onClick={(e) => handleClickOnLink(e)} className={`${activeLink[0] == 'Contact' || isIntersecting == 'Contact' ? 'bg-secondary-color text-white font-bold' : null}  rounded-md border-black border px-2 py-2 cursor-pointer hover:bg-secondary-color hover:text-white md:px-3 md:py-2`}>
            <span className='pointer-events-none mr-3'><FontAwesomeIcon icon={faPhone} /></span>
            <span className='pointer-events-none' href="/">Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;