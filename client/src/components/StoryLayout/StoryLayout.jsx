import React from 'react'

function StoryLayout() {
  return (
    <div className='overflow-hidden max-w-[1400px] m-auto relative'>
        <div className='flex flex-col place-content-between mt-16 md:flex-row'>
          <div className='text-white w-full px-5 tracking-widest md:w-1/2'>
            <p>I first discovered my love for front end development when I was doing UI/UX design freelancing. I had always been interested in design and user experience but i was drawn to the idea of how would it be to implement those designs by myself and create visually appealing and intuitive websites and applications.</p>
            <p className='mt-10'>One of the things I love most about front end development is the sense of accomplishment I feel when I see a project I have worked on go live and start being used by real people. There is nothing quite like the feeling of seeing something you have created being used and appreciated by others.</p>
            <p></p>
          </div>
          <div className='border border-red-500 w-full h-full px-5 mt-5 md:w-1/2 md:h-full'>
            
          </div>
        </div>
    </div>
  )
}

export default StoryLayout;