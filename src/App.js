import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Error from './components/Error.js'
import About from './pages/About.js'
import Logement from './pages/Logement.js'
import  './utils/style/globalStyle.css'


function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/logement/:logementId" element={<Logement />}/>
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
          
    </div>
  )
}

export default App
