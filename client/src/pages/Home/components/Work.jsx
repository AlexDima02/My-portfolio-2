import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from "animejs/lib/anime.es.js"
import splt from 'spltjs';
import { useNavigate } from 'react-router-dom';

function Work({sectionWork}) {

    const [imageUrl, setImageUrl] = useState('');
    const [autoPlay, setAutoPlay] = useState(false)
    console.log(imageUrl)
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const prevElementRef = useRef(null);
    console.log(index)
    const navigate = useNavigate();

    const storageImages = [
        {name: 'finance', url: './src/assets/Finance-web-app-project/', photos: 6}, 
        {name: 'forum', url: './src/assets/Forum-web-app-project/', photos: 2}, 
        {name: 'joomble', url: './src/assets/Joomble-ecommerce-project/', photos: 4}, 
        {name: 'weather', url: './src/assets/Weather-web-app-project/', photos: 11}
    ]

    useEffect(() => {
        handleScrolling();
        
        
            timeoutRef.current = setTimeout(() => {
                if(imageUrl.url !== '' && autoPlay == true){
                
                    setIndex((prev) => prev == imageUrl?.photos ? 0 : prev + 1)
                }else{
                    resetTimeout();
                }
                
            }, 1000);
  
        return () => {
            resetTimeout();
        }
    }, [index, prevElementRef, autoPlay])

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

    }

    const chooseRandomProject = (itemName) => {
       let chosenProject = storageImages.find((item) => item.name == itemName);
       prevElementRef.current = chosenProject;
       setImageUrl(chosenProject);

    }

    const handleHovering = (e) => {

        switch(e.target.id){
            case 'finance':
                setIndex(0)
                setAutoPlay(true)
                chooseRandomProject(e.target.id);
               console.log(e.target.id)
            break;
            case 'forum':
                setIndex(0)
                setAutoPlay(true)
                chooseRandomProject(e.target.id);

            console.log(e.target.id)
            break;
            case 'joomble':
                setIndex(0)
                setAutoPlay(true)
                chooseRandomProject(e.target.id);
            console.log(e.target.id)
              
            break;
            case 'weather':
                setIndex(0)
                setAutoPlay(true)
                chooseRandomProject(e.target.id);

                console.log(e.target.id)
            break;
        }

    }


    const handleScrolling = (e) => {

        let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -100);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                }
            }
        });

        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});
    }


    const handleLinkTo = (e) => {

        navigate(e.target.id)

    }

  return (
    <div id='Work' ref={sectionWork}>
            <div className='flex place-content-center overflow-hidden'>
                                <div className='flex animate-rightToLeft'>
                                    
                                    <div className='flex  h-fit'>
                                        <span className='text-white font-black text-8xl md:text-9xl mr-8 whitespace-nowrap'>LATEST PROJECTS</span>
                                        <span className='w-32 h-32 flex flex-col place-content-start md:place-content-center'><FontAwesomeIcon icon={faCircle} style={{color: "#fe6d3f", width: "82px", height: "82px"}} /></span>
                                    </div>
                                    <div className='flex   h-fit'>
                                        <span className='text-white font-black text-8xl md:text-9xl mr-8'>EXPERIENCE</span>
                                        <span className='w-32 h-32 flex flex-col place-content-start md:place-content-center'><FontAwesomeIcon icon={faCircle} style={{color: "#fe6d3f", width: "82px", height: "82px"}} /></span>
                                    </div>
                                </div>
                                <div className='flex animate-rightToLeft'>
                                    <div className='flex  h-fit'>
                                        
                                        <span className='text-white font-black text-8xl md:text-9xl mr-8 whitespace-nowrap'>LATEST PROJECTS</span>
                                        <span className='w-32 h-32 flex flex-col place-content-start md:place-content-center'><FontAwesomeIcon icon={faCircle} style={{color: "#fe6d3f", width: "82px", height: "82px"}} /></span>
                                    </div>
                                    <div className='flex h-fit'>
                                        <span className='text-white font-black text-8xl md:text-9xl mr-8'>EXPERIENCE</span>
                                        <span className='w-32 h-32 flex flex-col place-content-start md:place-content-center'><FontAwesomeIcon icon={faCircle} style={{color: "#fe6d3f", width: "82px", height: "82px"}} /></span>
                                    </div>
                                </div>
                                <div className='flex animate-rightToLeft'>
                                    
                                    <div className='flex  h-fit'>
                                        <span className='text-white font-black text-8xl md:text-9xl mr-8 whitespace-nowrap'>LATEST PROJECTS</span>
                                        <span className='w-32 h-32 flex flex-col place-content-start md:place-content-center'><FontAwesomeIcon icon={faCircle} style={{color: "#fe6d3f", width: "82px", height: "82px"}} /></span>
                                    </div>
                                    <div className='flex   h-fit'>
                                        <span className='text-white font-black text-8xl md:text-9xl mr-8'>EXPERIENCE</span>
                                        <span className='w-32 h-32 flex flex-col place-content-start md:place-content-center'><FontAwesomeIcon icon={faCircle} style={{color: "#fe6d3f", width: "82px", height: "82px"}} /></span>
                                    </div>
                                </div>
            </div>
            <div className='mt-32 hidden md:block'>
                <div className='relative'>
                    <p id='finance' onClick={(e) => handleLinkTo(e)} onMouseLeave={() => setAutoPlay(false)} onMouseEnter={(e) => handleHovering(e)} className={` transition-all text-white text-2xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-16 md:text-5xl`}>FINANCE WEB APP</p>
                    {imageUrl.name == 'finance' ?
                    <div className='absolute top-0 left-[60%] -translate-x-[60%] z-40 object-contain overflow-hidden w-96 h-72 rounded-md'>
                                    
                            <img className={`w-full h-full`} src={`${imageUrl.url}${index}.png`} alt="" />
                
                        </div>
                    : null}
                </div>
                <div className='relative'>
                    <p id='forum' onClick={(e) => handleLinkTo(e)} onMouseLeave={() => setAutoPlay(false)} onMouseEnter={(e) => handleHovering(e)} className={`transition-all text-white text-2xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-16 md:text-5xl`}>FORUM WEB APP</p>
                    {imageUrl.name == 'forum' ?
                    <div className='absolute top-0 left-[60%] -translate-x-[60%] z-40 object-contain overflow-hidden w-96 h-72 rounded-md'>
                                    
                            <img className={`w-full h-full`} src={`${imageUrl.url}${index}.png`} alt="" />
                
                        </div>
                    : null}  
                </div>
                <div className='relative'>
                    <p id='joomble' onClick={(e) => handleLinkTo(e)} onMouseLeave={() => setAutoPlay(false)} onMouseEnter={(e) => handleHovering(e)} className={`transition-all text-white text-2xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-16 md:text-5xl`}>JOOMBLE E-COMMERCE</p>
                    {imageUrl.name == 'joomble' ?
                    <div className='absolute top-0 left-[60%] -translate-x-[60%] z-40 object-contain overflow-hidden w-96 h-72 rounded-md'>
                                    
                            <img className={`w-full h-full`} src={`${imageUrl.url}${index}.png`} alt="" />
                
                        </div>
                    : null} 
                </div>
                <div className='relative'>
                    <p id='weather' onClick={(e) => handleLinkTo(e)} onMouseLeave={() => setAutoPlay(false)} onMouseEnter={(e) => handleHovering(e)} className={`transition-all text-white text-2xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 md:text-5xl`}>WEATHER WEB APP</p>    
                    {imageUrl.name == 'weather' ?
                    <div className='absolute top-0 left-[60%] -translate-x-[60%] z-40 object-contain overflow-hidden w-96 h-72 rounded-md'>
                                    
                            <img className={`w-full h-full`} src={`${imageUrl.url}${index}.png`} alt="" />
                
                        </div>
                    : null}
                </div>
                 
            </div>
            <div className='grid grid-cols-1 mb-28 mt-32 mx-10 grid-rows-3 md:hidden text-white gap-16'>
                <div id='finance' onClick={(e) => handleLinkTo(e)}>
                    <div className='pointer-events-none skewElem relative object-contain overflow-hidden  w-80 h-56 bg-red-500'>
                                        
                        <img className={`absolute top-0 left-0 w-full h-full`} src={`${storageImages.find((item) => item.name == 'finance').url}${index > 6 ? 0 : index}.png`} alt="" />
                                            
                    </div>
                    <h1 className='text-2xl font-black mt-5'>FINANCE WEB APP</h1>
                </div>
                <div id='forum' onClick={(e) => handleLinkTo(e)}>
                    <div className='pointer-events-none skewElem relative object-contain overflow-hidden  w-80 h-56 bg-red-500'>
                                        
                        <img className={`absolute top-0 left-0 w-full h-full`} src={`${storageImages.find((item) => item.name == 'forum').url}${index > 2 ? 0 : index}.png`} alt="" />
                                            
                    </div>
                    <h1 className='text-2xl font-black mt-5'>FORUM WEB APP</h1>
                </div>
                <div id='joomble' onClick={(e) => handleLinkTo(e)}>
                    <div onClick={(e) => handleLinkTo(e)} className='pointer-events-none skewElem relative object-contain overflow-hidden  w-80 h-56 bg-red-500'>
                                        
                        <img className={`absolute top-0 left-0 w-full h-full`} src={`${storageImages.find((item) => item.name == 'joomble').url}${index > 5 ? 0 : index}.png`} alt="" />
                                            
                    </div>
                    <h1 className='text-2xl font-black mt-5'>JOOMBLE E-COMMERCE</h1>
                </div>
                <div id='weather' onClick={(e) => handleLinkTo(e)} className='mb-24'>
                    <div className='pointer-events-none skewElem relative object-contain overflow-hidden w-80 h-56 bg-red-500'>
                                        
                        <img className={`absolute top-0 left-0 w-full h-full`} src={`${storageImages.find((item) => item.name == 'weather').url}${index}.png`} alt="" />
                            
                    </div>
                    <h1 className='text-2xl font-black mt-5'>WEATHER WEB APP</h1>
                </div>
            </div>
    </div>
  )
}

export default Work;
