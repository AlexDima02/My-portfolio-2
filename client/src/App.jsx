import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex place-content-center fixed bottom-10'>
        <Navbar />
      </div>
      <Home />
    </>
  )
}

export default App
