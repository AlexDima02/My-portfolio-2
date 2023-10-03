import React, { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion"
import anime from "animejs/lib/anime.es.js"
import splt from 'spltjs';


gsap.registerPlugin(ScrollTrigger);


function InterestLayout() {

    
    const [selectedItem, setSelectedItem] = useState([]);
    const [chosenText, setChosenText] = useState('')

    const [wasIntersecting, setWasIntrsecting] = useState(false)
    console.log(wasIntersecting)
    
    const interestParagraph = useRef(null);

    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }
    const callBackFn = (entries) => {

        const [entry] = entries
        if(entry.isIntersecting){

                setWasIntrsecting(true)
        }
    }


    useEffect(() => {
        
        handleScrolling();
        
        animateText();
        const observer = new IntersectionObserver(callBackFn, options);
        if(interestParagraph.current) observer.observe(interestParagraph.current);
      
        return () => {
            if(interestParagraph.current) observer.unobserve(interestParagraph.current)
        };

    }, [wasIntersecting])

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

    const animateText = () => {

            splt({
                reveal: true
            });
              
            anime({
                targets: '.reveal',
                translateY: [42, 0],
                loop: 0,
                delay: anime.stagger(25),
                easing: 'cubicBezier(.71,-0.77,.43,1.67)'
            });
        
    }
    
    const handleHovering = (e) => {

        
        switch(e.target.id){
            case 'i1':
                
                setSelectedItem([e.target.id])
                setChosenText('When I am not working I like to immerse myself in all sort of strategy games that puts my mind in different contexts or action games.')
            break;
            case 'i2':
                
                setSelectedItem([e.target.id])
                setChosenText('Recently I discovered that I like 3D World and I spend some time learning more about it such as 3D modeling or game engines.')
            break;
            case 'i3':
                

                setSelectedItem([e.target.id])
                setChosenText('When I prefer to do something intense and understand new things about our world I refugee myself in the world of technology where the sky is the limit.')
            break;
            case 'i4':
                setSelectedItem([e.target.id])
                setChosenText('I enjoy reading all sort of stuff from nouvels to technicals books about programming to grasp some knowledge everytime but when I just want to relax I prefer to get into the Orient world and read stoicism books.')
            break;
        }

    }

  return (
    <div className='mt-10'>
    <div ref={interestParagraph} className={`hidden md:block`}>
      {wasIntersecting ? 
        <div>
            <p id='i1' onMouseEnter={(e) => handleHovering(e)} className={`${wasIntersecting ? 'splt' : null}  transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-16`}>GAMING</p>
            <p id='3d-graphics' onMouseEnter={(e) => handleHovering(e)} className={`${wasIntersecting ? 'splt' : null}  transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-16`}>3D GRAPHICS</p>
            <p id='technology' onMouseEnter={(e) => handleHovering(e)} className={`${wasIntersecting ? 'splt' : null}  transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10 mb-16`}>TECHNOLOGY</p>
            <p id='philosophy' onMouseEnter={(e) => handleHovering(e)} className={`${wasIntersecting ? 'splt' : null}  transition-all text-white text-5xl hover:py-4 hover:bg-secondary-color font-bold cursor-pointer pl-10`}>PHILOSOPHY</p>    
            {chosenText !== '' ? <div className='bg-white text-black font-black tracking-widest absolute rounded-md max-w-[20%] min-w-[10%] left-[60%] bottom-[-60%] translate-x-[60%] p-5 hidden md:block'>
                   <p>{chosenText}</p>
                </div> 
            : null}   
        </div> 
        : null} 
    </div>
        <div className='grid grid-cols-1 mb-28 mx-10 grid-rows-3 md:hidden text-white gap-16'>
            <div>
                <div className='skewElem rounded-md bg-gray-700 p-5 text-sm'>
                    <p>When I am not working I like to immerse myself in all sort of strategy games that puts my mind in different contexts or action games.</p>
                    
                </div>
                <h1 className='text-2xl font-black mt-5'>GAMING</h1>
            </div>
                <div>
                    <div className='skewElem rounded-md bg-gray-700 p-5 text-sm'>
                        <p>Recently I discovered that I like 3D World and I spend some time learning more about it such as 3D modeling or game engines.</p>
                        
                    </div>
                    <h1 className='text-2xl font-black mt-5'>3D Graphics</h1>
                </div>
                <div>
                    <div className='skewElem rounded-md bg-gray-700 p-5 text-sm'>
                        <p>When I prefer to do something intense and understand new things about our world I refugee myself in the world of technology where the sky is the limit.</p>
                        
                    </div>
                    <h1 className='text-2xl font-black mt-5'>Technology</h1>
                </div>
                <div className='mb-24'>
                    <div className='skewElem rounded-md bg-gray-700 p-5 text-sm'>
                        <p>I enjoy reading all sort of stuff from nouvels to technicals books about programming to grasp some knowledge everytime but when I just want to relax I prefer to get into the Orient world and read stoicism books.</p>
                    
                    </div>
                    <h1 className='text-2xl font-black mt-5'>Philosophy</h1>
                </div>
        </div>
    </div>
  )
}

export default InterestLayout;