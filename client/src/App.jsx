import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {Route, Router, Routes, useLocation} from 'react-router-dom'
import  ProjectPage  from '../src/pages/ProjectPage/ProjectPage'
import { AnimatePresence } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />}/>
          <Route path='/:name' element={<ProjectPage />}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
