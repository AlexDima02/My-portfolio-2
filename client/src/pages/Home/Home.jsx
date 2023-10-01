import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header';
import About from './components/About';
import Work from './components/Work';
import Navbar from '../../components/Navbar/Navbar';
import Contact from './components/Contact';

function Home(){
    const sectionWork = useRef(null)
    const sectionAbout = useRef(null)
    const sectionContact = useRef(null)
    const sectionHero = useRef(null)
    const [isIntersecting, setInterescting] = useState('');
    const [activeLink, setActive] = useState([]);
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    const callBackFn = (entries) => {

        const [entry] = entries
        
        switch(entry.target.id){
            case 'Hero':
                setInterescting(entry.target.id)
                setActive([])
                console.log(entry.target.id)
            break;
            case 'About':
                setInterescting(entry.target.id)
                setActive([])
                console.log(entry.target.id)
            break;
            case 'Work':
                setInterescting(entry.target.id)
                setActive([])
                console.log(entry.target.id)
            break;
            case 'Contact':
                setInterescting(entry.target.id)
                setActive([])
                console.log(entry.target.id)
            break;
        }
    }

    useEffect(() => {
        const observerSectionWork = new IntersectionObserver(callBackFn, options);
        if(sectionWork.current) observerSectionWork.observe(sectionWork.current);
        const observerSectionAbout = new IntersectionObserver(callBackFn, options);
        if(sectionAbout.current) observerSectionAbout.observe(sectionAbout.current);
        const observerSectionHero = new IntersectionObserver(callBackFn, options);
        if(sectionHero.current) observerSectionHero.observe(sectionHero.current);
        const observerSectionContact = new IntersectionObserver(callBackFn, options);
        if(sectionContact.current) observerSectionContact.observe(sectionContact.current);
       
        return () => {
            if(sectionWork.current) observerSectionWork.unobserve(sectionWork.current);
            if(sectionAbout.current) observerSectionAbout.unobserve(sectionAbout.current);
            if(sectionHero.current) observerSectionHero.unobserve(sectionHero.current);
            if(sectionContact.current) observerSectionContact.unobserve(sectionContact.current);
        }
    }, [])

    return (
        <>
            <div className='w-full flex place-content-center fixed bottom-10 z-50'>
                <Navbar setActive={setActive} activeLink={activeLink} setInterescting={setInterescting} isIntersecting={isIntersecting} sectionHero={sectionHero} sectionWork={sectionWork} sectionAbout={sectionAbout} sectionContact={sectionContact}/>
            </div>
            <Header sectionHero={sectionHero}/>
            <div className='border border-red-400 flex flex-col place-content-start min-h-screen -z-50'>
                    <div className='flex justify-center place-content-center overflow-hidden mt-12'>
                        <div className='flex'>
                            <div className='flex  animate-rightToLeft h-fit'>
                                <span className='text-white font-black text-8xl md:text-9xl mr-8'>DIMULESCU</span><span className='second-text text-8xl md:text-9xl'>ALEXANDRU</span>
                            </div>
                            <div className='flex animate-rightToLeft h-fit'>
                                <span className='text-white font-black text-8xl md:text-9xl mr-8'>DIMULESCU</span><span className='second-text text-8xl md:text-9xl'>ALEXANDRU</span>
                            </div>
                            <div className='flex animate-rightToLeft h-fit'>
                                <span className='text-white font-black text-8xl md:text-9xl mr-8'>DIMULESCU</span><span className='second-text text-8xl md:text-9xl'>ALEXANDRU</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-white  flex place-content-between px-4 mt-5'>
                        <div className='w-1/2 font-bold text-2xl'>
                            <p>FRONT - END DEVELOPER</p>
                        </div>
                        <div className='font-bold tracking-[0.2rem] text-sm whitespace-normal text-left w-1/2 md:w-1/3'>
                            <p>My mission is to help you build your projects with my versatility and my ability to adapt to different situations. Together, let's turn your ideas into great projects!</p>
                        </div>
                    </div>
                    <div className='max-w-[500px] min-w-[300px] absolute bottom-0 left-1/2 -translate-x-[50%]'>
                        <img  className='w-full h-full' src="./src/assets/ian-dooley-d1UPkiFd04A-unsplash.png" alt="Some image" />
                    </div>
            </div>
            <div className='border border-red-500 min-h-screen'>
                <About sectionAbout={sectionAbout}/>
            </div>
            <div className='border border-red-500 min-h-screen'>
                <Work sectionWork={sectionWork}/>
            </div>
            <div className='border border-red-500 min-h-screen'>
                <Contact sectionContact={sectionContact}/>
            </div>
        </>
    )


}

export default Home;