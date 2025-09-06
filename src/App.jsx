import Footer from './component/Footer.jsx'
import Navbar from './component/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route } from 'react-router-dom'
import Academics from './pages/Academics.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='academics' element={<Academics/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
