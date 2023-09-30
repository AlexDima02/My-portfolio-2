import React, { useEffect, useState } from 'react'
import { useLocation, useRoutes } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProjectPage() {
    
    const [currentProject, setCurrentProject] = useState();
    
    const [infoProject, setInfoProject] = useState([
        {title: 'Finance Web App', name: '/finance', description: 'It is a web app designed to help every people keep track of their expenses. For me it was a game changer because it was created from the necessity of managing my money during my Erasmus program in a foreign country.', details: {
            paragraph1: 'Set limit of your budget automatically',
            paragraph2: 'Total balance',
            paragraph3: 'Keep track of your transactions',
            paragraph4: 'Filter your transactions',
            paragraph5: 'Manage your accounts'
        }, url: './src/assets/Finance-web-app-project/', photo: 6, link: 'https://money-keeper-track-your-money.netlify.app/', repo: 'https://github.com/AlexDima02/Finance-Web-App-prod'},
        {title: 'Joomble - Ecommerce website', name: '/joomble', description: 'E-commerce store selling sports articles, made using React JS and Strapi as a CMS.', details: {
            paragraph1: 'Manage your content as an owner using the dashboard offered by Strapi CMS.',
            paragraph2: 'Shopping Cart functionality',
            paragraph3: 'Filter the products directly from the backend.',
            paragraph4: 'Buy products using the integration of the Stripe payment system.'
        }, url: './src/assets/Joomble-ecommerce-project/', photo: 5, link: 'https://joomble-ecommerce.netlify.app/', repo: 'https://github.com/AlexDima02/Joomble-ecommerce'},
        {title: 'Forum Web App', name: '/forum', description: `This is a forum about any topic and can be an accesible to anyone who has an account but if you don't have you can assist to the discussions that are going on live`, details: {
            paragraph1: 'Fully integrated with Firebase as a backend database',
            paragraph2: 'Anonymous visitors are allowed just to view the posts',
            paragraph3: 'Like and comment to every post',
            paragraph4: '2 levels of reply system similar to Facebook',
            paragraph5: 'Markdown editor to create your new post and preview the result before submitting it'
        }, url: './src/assets/Forum-web-app-project/', photo: 3, link: 'https://curiosity-forum.netlify.app/', repo: 'https://github.com/AlexDima02/Forum'},
        {title: 'Weather Web App', name: '/weather', description: '', details: {
            paragraph1: '',
            paragraph2: '',
            paragraph3: '',
            paragraph4: ''
        }, url: './src/assets/Weather-web-app-project/'},
    ])

    const location = useLocation();

    useEffect(() => {
        const chosenProject = infoProject.find((item) => item.name == location.pathname);
        setCurrentProject(chosenProject)
        console.log(currentProject)
    }, [])

    const renderAvailableImages = () => {
        let arr = [];
        for(let i = 0; i < currentProject?.photo; i++){
            arr.push(<img src={`${currentProject?.url}${i}.png`}></img>)
        }
        return arr;
    }
  
    return (
        <div className='text-white max-w-[1400px] m-auto'>
            <motion.div 
                className='slide-in'
                initial={{transform: 'translateX(0%)'}}
                animate={{transform: 'translateY(100%)'}}
                transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>
            </motion.div>
            <motion.div
                className='slide-out'
                initial={{transform: 'translateX(0%)'}}
                animate={{transform: 'translateY(-100%)'}}
                transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}>
            </motion.div>
            <div className='flex w-full place-content-end py-5'>
                <a target='_blank' id='button' className='border border-white p-2 rounded-full hover:text-white' href={currentProject?.link}>
                    Visit it
                    <span id="circle"></span>
                </a>
                <a target='_blank' id='button' className='border border-white p-2 rounded-full mx-4' href={currentProject?.repo}>
                    GitHub
                    <span id="circle"></span>
                </a>
            </div>
            <div id='header' className='px-5 flex-col mt-10 md:flex-row'>
                <div className='w-full'>
                    <h1 className='text-5xl font-bold mb-5'>{currentProject?.title}</h1>
                    <p>{currentProject?.description}</p>
                </div>
            </div>
            <div id='features' className='px-5 mt-10 flex-col md:flex-row'>
                <div>
                    <h2 className='text-4xl font-bold mb-5'>Features</h2>
                    <ul>
                        <li className='mb-2'>{currentProject?.details.paragraph1}</li>
                        <li className='mb-2'>{currentProject?.details.paragraph2}</li>
                        <li className='mb-2'>{currentProject?.details.paragraph3}</li>
                        <li className='mb-2'>{currentProject?.details.paragraph4}</li>
                        <li>{currentProject?.details.paragraph5}</li>
                    </ul>
                </div>
                <div className='grid gap-10 grid-cols-1 grid-rows-auto my-20 md:grid-cols-3'>
                    {renderAvailableImages().map((el) => (
                        <div>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ProjectPage;