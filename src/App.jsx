import Footer from './component/Footer.jsx'
import Navbar from './component/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
