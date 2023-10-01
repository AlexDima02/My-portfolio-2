import React, { useState } from 'react'
import InterestLayout from '../../../components/InterestLayout/InterestLayout';
import ServicesLayout from '../../../components/ServicesLayout/ServicesLayout';
import StoryLayout from '../../../components/StoryLayout/StoryLayout';
import { motion } from "framer-motion"


function About({sectionAbout}) {

    const tabs = [
        {id: 1, type: 'SERVICES'},
        {id: 2, type: 'MY STORY'},
        {id: 3, type: 'INTERESTS'}
    ]
    const [selectedOption, setSelectedOption] = useState(tabs[0].type)
    
    
    console.log(selectedOption)
    const handleSelection = (e) => {
        console.log(e.target.id)
        switch(e.target.id){
            case 'SERVICES':
                setSelectedOption(e.target.id)
            break;
            case 'MY STORY':
                setSelectedOption(e.target.id)
               
            break;
            case 'INTERESTS':
                setSelectedOption(e.target.id)
            break;
           
        }

    }

  return (
        <div id='About' ref={sectionAbout} className='flex flex-col'>
            <div className='flex place-content-center my-16'>
                <div className='flex text-gray-400 w-[80%] place-content-between px-4 md:w-1/2'>
                    {tabs.map((item, id) => (
                        <button onClick={(e) => handleSelection(e)} id={item.type} className={`${selectedOption == item.type ? 'text-white transition-all' : null} hover:text-white cursor-pointer relative`}>
                                {item.type}
                                {selectedOption == item.type 
                                    ? 
                                    <motion.div layoutId='white-circle' className='rounded-full top-8 left-1/2 -translate-x-[50%] absolute w-3 h-3 bg-white'/>
                                    : 
                                    null
                                } 
                        </button>
                    ))}
                </div>
            </div>
            {selectedOption == 'INTERESTS' ? <InterestLayout /> : null}
            {selectedOption == 'MY STORY' ? <StoryLayout /> : null}
            {selectedOption == 'SERVICES' ? <ServicesLayout /> : null}
        </div>
  )
}

export default About;