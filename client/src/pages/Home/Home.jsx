import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header';
import About from './components/About';
import Work from './components/Work';
import Navbar from '../../components/Navbar/Navbar';
import Contact from './components/Contact';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Home(){
    const sectionWork = useRef(null)
    const sectionAbout = useRef(null)
    const sectionContact = useRef(null)
    const sectionHero = useRef(null)
    // const scrollProgress = useScroll({
    //     target: sectionHero,
    //     offset: ["start start", "end start"]
    // })
    // const textY = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);
    // const characterY = useTransform(scrollProgress, [0, 1], ["0%", "200%"]);
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
            
            <div className='flex flex-col place-content-start min-h-screen -z-50'>
                    <div  className='flex justify-center place-content-center overflow-hidden mt-12'>
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
                    
                    <div  className='text-white  flex place-content-between px-4 mt-5'>
                        <div className='w-1/2 font-bold text-2xl'>
                            <p>FRONT - END DEVELOPER</p>
                        </div>
                        <div className='font-bold tracking-[0.2rem] text-sm whitespace-normal text-left w-1/2 md:w-1/3'>
                            <p>My mission is to help you build your projects with my versatility and my ability to adapt to different situations. Together, let's turn your ideas into great projects!</p>
                        </div>
                    </div>

                    <div  className='max-w-[700px] min-w-[400px] absolute bottom-0 left-1/2 -translate-x-[50%]'>
                        <img  className='w-full h-full' src="img/ian-dooley-d1UPkiFd04A-unsplash.png" alt="Some image" />
                    </div>
            </div>

            <div className=' min-h-screen'>
                <About sectionAbout={sectionAbout}/>
            </div>
            <div className=' min-h-screen'>
                <Work sectionWork={sectionWork}/>
            </div>
            <div className=' min-h-screen overflow-hidden'>
                {/* <div className='bg-white opacity-[2%] h-[20%] min-w-full absolute top-0 left-0 blur-xl -z-50'></div> */}
                <div className='flex relative'>
                    <div className='-z-40 w-full absolute text-white top-0 blur-2xl opacity-20 flex animate-leftToRight animate-upDown overflow-hidden'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute text-white top-0 blur-2xl opacity-20 flex animate-leftToRight animate-upDown overflow-hidden'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute text-white top-0 blur-2xl opacity-20 flex animate-leftToRight animate-upDown overflow-hidden'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute text-white top-0 blur-2xl opacity-20 flex animate-leftToRight animate-upDown overflow-hidden'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute text-white top-4 left-0 opacity-40 blur-lg flex animate-leftToRight  overflow-hidden md:h-96'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute  text-white top-4 left-0 opacity-40 blur-lg flex animate-leftToRight  overflow-hidden md:h-96'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute text-white top-4 left-0 opacity-40 blur-lg flex animate-leftToRight  overflow-hidden md:h-96'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute  text-white top-4 left-0 opacity-40 blur-lg flex animate-leftToRight  overflow-hidden md:h-96'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute  text-white top-4 left-0 opacity-40 blur-lg flex animate-leftToRight  overflow-hidden md:h-96'>
                        <img className='w-full h-full' src="./src/assets/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                    <div className='-z-40 w-full absolute text-white -top-4 left-0 opacity-40 blur-lg flex animate-rightToLeft  overflow-hidden md:h-96'>
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                        <img className='w-full h-full' src="img/Vector 1.png" alt="" />
                    </div>
                </div>
                    <Contact sectionContact={sectionContact}/>
            </div>
        </>
    )


}

export default Home;