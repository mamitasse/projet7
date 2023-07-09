import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import About from './pages/About'
import Logement from './pages/Logement'
import  './utils/style/globalStyle.css'


function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />}/>
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
          
    </div>
  )
}

export default App
