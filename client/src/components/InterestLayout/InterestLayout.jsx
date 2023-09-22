import React, { useEffect, useRef, useState } from 'react'

function InterestLayout() {

    const [selectedItem, setSelectedItem] = useState([]);
    const [chosenText, setChosenText] = useState('')

    const [scrollTop, setScrollTop] = useState(0);
    console.log(scrollTop)
    const firstElement = useRef(null);
    const secondElement = useRef(null);
    const thirdElement = useRef(null);
    const fourthElement = useRef(null);
    const firstTextElement = useRef(null);

    useEffect(() => {
        
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
            handleScrolling();
        };

      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrollTop])

    const handleScrolling = (e) => {
        console.log(firstElement.current.getBoundingClientRect().top + document.documentElement.scrollTop)
        console.log(secondElement.current.getBoundingClientRect().top + document.documentElement.scrollTop)
        console.log(thirdElement.current.getBoundingClientRect().top + document.documentElement.scrollTop)
        console.log(fourthElement.current.getBoundingClientRect().top + document.documentElement.scrollTop)
        
        if(scrollTop < firstElement.current.getBoundingClientRect().top + document.documentElement.scrollTop){ 
            firstElement.current.classList.add('bg-red-500')
        }else{
            firstElement.current.classList.remove('bg-red-500')
        }
        if(scrollTop < secondElement.current.getBoundingClientRect().top - 100 + document.documentElement.scrollTop){ 
            secondElement.current.classList.add('bg-red-500')
        }else{
            secondElement.current.classList.remove('bg-red-500')
        }
        if(scrollTop < thirdElement.current.getBoundingClientRect().top + document.documentElement.scrollTop){ 
            thirdElement.current.classList.add('bg-red-500')
        }else{
            thirdElement.current.classList.remove('bg-red-500')
        }
        if(scrollTop < fourthElement.current.getBoundingClientRect().top + document.documentElement.scrollTop){ 
            fourthElement.current.classList.add('bg-red-500')
        }else{
            fourthElement.current.classList.remove('bg-red-500')
        }
    }

    const startAnimationForText = () => {

    }

    const handleHovering = (e) => {
        console.log(e.target.id)
        switch(e.target.id){
            case 'gaming':
                setSelectedItem([e.target.id])
                setChosenText('Matthis (HE/HIM) is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis operates globally and is ready to take on any design challenge.')
            break;
            case '3d-graphics':
                setSelectedItem([e.target.id])
                setChosenText('Matthis (HE/HIM) is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis opera.')
            break;
            case 'technology':
                setSelectedItem([e.target.id])
                setChosenText('b')
            break;
            case 'philosophy':
                setSelectedItem([e.target.id])
                setChosenText('a')
            break;
        }

    }

  return (
    <div className='mt-10'>
    <div className='hidden md:block'>
      <p id='gaming' ref={firstTextElement} onMouseEnter={(e) => handleHovering(e)} className='transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-10 relative'>GAMING</p>
      <p id='3d-graphics' onMouseEnter={(e) => handleHovering(e)} className='transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-10'>3D GRAPHICS</p>
      <p id='technology' onMouseEnter={(e) => handleHovering(e)} className='transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-10'>TECHNOLOGY</p>
      <p id='philosophy' onMouseEnter={(e) => handleHovering(e)} className='transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-10'>PHILOSOPHY</p>
        {chosenText !== '' ? <div className='bg-slate-400 text-white absolute rounded-md max-w-[20%] min-w-[10%] left-[50%] bottom-[-50%] translate-x-[50%] p-5 hidden md:block'>
            <p>{chosenText}</p>
        </div> : null}
    </div>
        <div className='grid grid-cols-1 mb-28 mx-10 grid-rows-3 md:hidden text-white gap-72'>
            <div ref={firstElement}>
                <div className='rounded-md bg-slate-400 p-5 text-sm'>
                    <p>Matthis (HE/HIM) is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis operates globally and is ready to take on any design challenge.</p>
                    
                </div>
                <h1 className='text-2xl font-black mt-5'>GAMING</h1>
            </div>
                <div ref={secondElement}>
                    <div className='rounded-md bg-slate-400 p-5 text-sm'>
                        <p>Matthis (HE/HIM) is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis operates globally and is ready to take on any design challenge.</p>
                        
                    </div>
                    <h1 className='text-2xl font-black mt-5'>3D Graphics</h1>
                </div>
                <div ref={thirdElement}>
                    <div className='rounded-md bg-slate-400 p-5 text-sm'>
                        <p>Matthis (HE/HIM) is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis operates globally and is ready to take on any design challenge.</p>
                        
                    </div>
                    <h1 className='text-2xl font-black mt-5'>Technology</h1>
                </div>
                <div ref={fourthElement} className='mb-[600px]'>
                    <div className='rounded-md bg-slate-400 p-5 text-sm'>
                        <p>Matthis (HE/HIM) is a nomad product and brand designer with a passion for art and technology. He uses Webflow and other low-code tools to create stunning, one-of-a-kind pieces that come to life on the internet. Currently residing in the lush jungle of Mexico, Matthis operates globally and is ready to take on any design challenge.</p>
                    
                    </div>
                    <h1 className='text-2xl font-black mt-5'>Philosophy</h1>
                </div>
        </div>
    </div>
  )
}

export default InterestLayout;