import React, { useState } from 'react'

function ServicesLayout() {

  const [openTab, setOpenTab] = useState(false)
  console.log(openTab)

  const handleOpening = (e) => {
    setOpenTab(e.target.id)
  }

  return (
    <div className='text-white h-full'>
        <div className='mt-16 flex flex-col place-content-center justify-center min-h-full'>
          <div className='p-5 bg-secondary-color mb-10 flex place-content-between'>
            <p className='font-bold text-xl'>Front end development</p>
            <div id='tab1' onClick={(e) => handleOpening(e)} className='relative flex flex-col cursor-pointer w-10 h-10'>
              <span className={`absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]  h-[3px] w-[15px] bg-white`}></span>
              <span className={`${openTab == 'tab1' ? 'rotate-90 transition-all' : 'rotate-0 transition-all'} absolute top-[50%] -translate-y-[50%]  left-[50%] -translate-x-[50%] h-[3px] w-[15px] bg-white`}></span>
            </div>
          </div>
          <div className='p-5 bg-secondary-color flex place-content-between'>
            <p className='font-bold text-xl'>Creative implementation</p>
            <div id='tab2' onClick={(e) => handleOpening(e)} className='relative flex flex-col cursor-pointer w-10 h-10'>
              <span className={`absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]  h-[3px] w-[15px] bg-white`}></span>
              <span className={`${openTab == 'tab2' ? 'rotate-90 transition-all' : 'rotate-0 transition-all'}  absolute top-[50%] -translate-y-[50%]  left-[50%] -translate-x-[50%] h-[3px] w-[15px] bg-white`}></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServicesLayout;