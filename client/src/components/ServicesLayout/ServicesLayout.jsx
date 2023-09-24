import React, { useState } from 'react'

function ServicesLayout() {

  const [openTab, setOpenTab] = useState({
    tab1: false,
    tab2: false
  })
  console.log(openTab)

  const handleOpening = (e) => {
    if(e.target.id == 'tab1'){
      setOpenTab({
        ...openTab,
        tab1: !openTab.tab1
      })
    }else if(e.target.id == 'tab2'){
      setOpenTab({
        ...openTab,
        tab2: !openTab.tab2
      })
    }
  }

  return (
    <div className='text-white h-full'>
        <div className='mt-16 flex flex-col place-content-center justify-center min-h-full'>
          <div className='p-5 bg-secondary-color flex place-content-between'>
            <p className='font-bold text-xl'>Front end development</p>
            <div id='tab1' onClick={(e) => handleOpening(e)} className='relative flex flex-col cursor-pointer w-10 h-10'>
              <span className={`absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]  h-[3px] w-[15px] bg-white pointer-events-none`}></span>
              <span className={`${openTab.tab1 ? 'rotate-0 transition-all' : 'rotate-90 transition-all'} absolute top-[50%] -translate-y-[50%] pointer-events-none  left-[50%] -translate-x-[50%] h-[3px] w-[15px] bg-white`}></span>
            </div>
          </div>
          <div className={`${openTab.tab1 ? 'transition-all h-80 md:h-48' : 'transition-all h-0'} bg-white text-black`}>
            <p className={`${openTab.tab1 ? 'block' : 'hidden'} p-5 tracking-widest`}>
              As a front end developer, I am passionate about creating user-friendly and visually appealing websites and applications. 
              I have a strong understanding of HTML, CSS, and JavaScript, and I am skilled at using these technologies to build intuitive and responsive user interfaces.

            </p>
            <p className={`${openTab.tab1 ? 'block' : 'hidden'} p-5 tracking-widest`}>
              <span className='font-bold'>Experience in: React JS / TailwindCSS / Bootstrap / Node JS / HTML5 / CSS3 / Javascript</span>
            </p>
          </div>
          <div className='p-5 bg-secondary-color flex place-content-between mt-10'>
            <p className='font-bold text-xl'>Creative implementation</p>
            <div id='tab2' onClick={(e) => handleOpening(e)} className='relative flex flex-col cursor-pointer w-10 h-10'>
              <span className={`absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] pointer-events-none  h-[3px] w-[15px] bg-white`}></span>
              <span className={`${openTab.tab2 ? 'rotate-0 transition-all' : 'rotate-90 transition-all'} pointer-events-none  absolute top-[50%] -translate-y-[50%]  left-[50%] -translate-x-[50%] h-[3px] w-[15px] bg-white`}></span>
            </div>
          </div>
          <div className={`${openTab.tab2 ? 'transition-all h-96 mb-36  md:h-48' : 'transition-all h-0'} bg-white text-black`}>
            <p className={`${openTab.tab2 ? 'block' : 'hidden'} p-5 tracking-widest`}>
            Whether I'm working on the development of new software and technology or coming up with new business models, I thrive on the opportunity to use my imagination and critical thinking skills to find innovative solutions. I believe that creative implementation is a key aspect of my work in the IT industry, and I am always looking for new ways to apply my skills and experience to help my clients succeed.

            
             
            </p>
            <p className={`${openTab.tab2 ? 'block' : 'hidden'} p-5 tracking-widest`}>
              <span className='font-bold'>Proefficient in: Figma, Adobe Illustrator, Adobe Photoshop</span>
            </p>
          </div>
        </div>
    </div>
  )
}

export default ServicesLayout;