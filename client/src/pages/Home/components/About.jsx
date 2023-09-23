import React, { useState } from 'react'
import InterestLayout from '../../../components/InterestLayout/InterestLayout';
import ServicesLayout from '../../../components/ServicesLayout/ServicesLayout';
import StoryLayout from '../../../components/StoryLayout/StoryLayout';

function About() {

    const [selectedOption, setSelectedOption] = useState('interests')
    
    console.log(selectedOption)
    const handleSelection = (e) => {
        console.log(e.target.id)
        switch(e.target.id){
            case 'services':
                setSelectedOption(e.target.id)
            break;
            case 'story':
                setSelectedOption(e.target.id)
               
            break;
            case 'interests':
                setSelectedOption(e.target.id)
            break;
           
        }

    }

  return (
        <div className='flex flex-col'>
            <div className='flex place-content-center my-16'>
                <div className='flex text-gray-400'>
                    <div className={`${selectedOption == 'services' ? 'text-white transition-all' : null} hover:text-white cursor-pointer`}>
                        <p id='services' onClick={(e) => handleSelection(e)}>SERVICES</p>
                    </div>
                    <div className={`${selectedOption == 'story' ? 'text-white transition-all' : null} mx-10 cursor-pointer hover:text-white`}>
                        <p id='story' onClick={(e) => handleSelection(e)}>MY STORY</p>
                    </div>
                    <div className={`${selectedOption == 'interests' ? 'text-white transition-all' : null} cursor-pointer hover:text-white`}>
                        <p id='interests' onClick={(e) => handleSelection(e)}>INTERESTS</p>
                    </div>
                </div>
            </div>
            {selectedOption == 'interests' ? <InterestLayout /> : null}
            {selectedOption == 'story' ? <StoryLayout /> : null}
            {selectedOption == 'services' ? <ServicesLayout /> : null}
        </div>
  )
}

export default About;