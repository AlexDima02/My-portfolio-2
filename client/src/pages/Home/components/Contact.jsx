import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'; 

function Contact({sectionContact}) {
  return (
    <div id='Contact' ref={sectionContact} className='max-w-[1400px] m-auto md:mt-96'>
        <div className='flex flex-col place-content-center'>
            <div className='text-white my-16'>
                <h1 className='text-center text-5xl font-bold text-white'>CONTACT ME</h1>
            </div>
            <form action='https://formsubmit.co/8486bf79db0dbe1e9a21a0523ebd7424' method='POST' className='flex flex-col mt-16'>
                <div className='flex place-content-between'>
                    <div className='w-1/2 flex flex-col place-content-between text-white px-5'>
                        <div className='relative'>
                                <input required id="firstName" name="firstName" type="text" class="peer h-10 w-full border-b-2 border-white px-2 py-3 placeholder-transparent focus:outline-none focus:border-[#FE6D3F] bg-transparent text-white" placeholder="write data" />
                                <label for="firstName" class="absolute left-0 -top-7 text-white text-xl font-bold transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-normal peer-placeholder-shown:text-secondary-color peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-secondary-color peer-focus:text-xl peer-focus:font-bold">First Name</label>
                        </div>
                        <div className='relative mt-10'>
                                    <input required id="lastName" name="lastName" type="text" class="peer h-10 w-full border-b-2 border-white px-2 py-3 placeholder-transparent focus:outline-none focus:border-[#FE6D3F] bg-transparent text-white" placeholder="write data" />
                                    <label for="lastName" class="absolute left-0 -top-7 text-white text-xl font-bold transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-normal peer-placeholder-shown:text-secondary-color peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-secondary-color peer-focus:text-xl peer-focus:font-bold">Last Name</label>
                        </div>
                    </div>
                    <div className='w-1/2 flex-col place-content-between text-white px-5'>
                            <div className='relative'>
                                <input required id="email" name="email" type="email" class="peer h-10 w-full border-b-2 border-white px-2 py-3 placeholder-transparent focus:outline-none focus:border-[#FE6D3F] bg-transparent text-white" placeholder="write data" />
                                <label for="email" class="absolute left-0 -top-7 text-white text-xl font-bold transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-normal peer-placeholder-shown:text-secondary-color peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-secondary-color peer-focus:text-xl peer-focus:font-bold">Email</label>
                            </div>
                            <div className='relative mt-10'>
                                    <input required id="phone" name="phone" type="tel" class="peer h-10 w-full border-b-2 border-white px-2 py-3 placeholder-transparent focus:outline-none focus:border-[#FE6D3F] bg-transparent text-white" placeholder="write data" />
                                    <label for="phone" class="absolute left-0 -top-7 text-white text-xl font-bold transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-normal peer-placeholder-shown:text-secondary-color peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-secondary-color peer-focus:text-xl peer-focus:font-bold">Phone number</label>
                            </div>
                    </div>
                </div>
                <div className='w-full px-5 mt-5'>
                    <textarea name="message" required className='bg-gray-700 outline-none rounded-sm w-full p-5 text-white font-bold tracking-wider' placeholder='Write me a message...' id="" cols="30" rows="10"></textarea>
                </div>
                <div className='flex place-content-center mt-5'>
                    <button type='submit' className='font-bold text-white'>SUBMIT</button>
                </div>
                <input type="hidden" name="_next" value="http://localhost:5173/"/>
                <input type="text" name="_honey" className='hidden'/>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from your website!"></input>
            </form>
            <div className='flex flex-col place-content-center w-full px-5 mt-20 mb-40'>
                <div className='transition-all relative hover:bg-[#D9D9D9] hover:text-primary-color text-white font-bold p-7 cursor-pointer'>
                   <a target='_blank' className='w-full absolute top-[50%] -translate-y-[50%] left-2' href="https://github.com/AlexDima02">GitHub</a>
                   <span className='absolute right-2 top-[50%] -translate-y-[50%]'><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#000000", width: "30px", height: "30px"}} /></span> 
                </div>
                <div className='transition-all relative hover:bg-[#D9D9D9] hover:text-primary-color text-white font-bold p-7 cursor-pointer'>
                   <a target='_blank' className='w-full absolute top-[50%] -translate-y-[50%] left-2' href="https://www.linkedin.com/in/dimulescu-alexandru/">LinkedIn</a>
                   <span className='absolute right-2 top-[50%] -translate-y-[50%]'><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#000000", width: "30px", height: "30px"}} /></span> 
                </div>
                <div className='transition-all relative hover:bg-[#D9D9D9] hover:text-primary-color text-white font-bold p-7 cursor-pointer'>
                   <a target='_blank' className='w-full absolute top-[50%] -translate-y-[50%] left-2' href="https://web.facebook.com/alexandru.dimulescu.35/">Facebook</a>
                   <span className='absolute right-2 top-[50%] -translate-y-[50%]'><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#000000", width: "30px", height: "30px"}} /></span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;