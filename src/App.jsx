import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './pages/Details';


function App() {

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
     </Router>
    </>
  )
}

export default App
