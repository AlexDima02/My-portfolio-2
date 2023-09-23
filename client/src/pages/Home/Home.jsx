import React from 'react'
import Header from '../../components/Header/Header';
import About from './components/About';

function Home(){

    return (
        <>
            <Header />
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
                <About />
            </div>
        </>
    )


}

export default Home;