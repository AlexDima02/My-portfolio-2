import React from 'react'

function Header() {
  return (
    <nav className='flex place-content-between p-4'>
        <div>
            <a className='p-2' href=''>Logo</a>
        </div>
        <div className='flex'>
           
            <a id='button' className='border border-white p-2 rounded-full hover:text-white' href=''>
                Facebook 
                <span id="circle"></span>
            </a>
            <a id='button' className='border border-white p-2 rounded-full mx-4' href=''>
                GitHub
                <span id="circle"></span>
            </a>
            <a id='button' className='border border-white p-2 rounded-full' href=''>
                LinkedIn
                <span id="circle"></span>
            </a>

        </div>
    </nav>
  )
}

export default Header;