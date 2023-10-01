import React from 'react'

function Header({sectionHero}) {
  return (
    <nav id='Hero' ref={sectionHero} className='flex place-content-between p-4'>
        <div>
            <a className='p-2' href=''>Logo</a>
        </div>
        <div className='flex'>
           
            <a target='_blank' id='button' className='border border-white p-2 rounded-full hover:text-white' href='https://www.facebook.com/alexandru.dimulescu.35/'>
                Facebook 
                <span id="circle"></span>
            </a>
            <a target='_blank' id='button' className='border border-white p-2 rounded-full mx-4' href='https://github.com/AlexDima02'>
                GitHub
                <span id="circle"></span>
            </a>
            <a target='_blank' id='button' className='border border-white p-2 rounded-full' href='https://www.linkedin.com/in/dimulescu-alexandru/'>
                LinkedIn
                <span id="circle"></span>
            </a>

        </div>
    </nav>
  )
}

export default Header;