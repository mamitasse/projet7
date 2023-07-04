import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'
import About from './pages/About/About'
import Logement from './pages/Logement/Logement'
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
