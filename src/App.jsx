import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './componentes/footer/Footer';
import Home from './componentes/Home/Home';
import Casas from './componentes/Casas/Casa';
import Nav from './componentes/nav/Nav';
import Libros from './componentes/Libros/libros';
import Personajes from './componentes/personajes/personajes'
import Hechizos from './componentes/Hechizos/hechizos'

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/hechizos' element={<Hechizos />} />
          <Route path='/libros' element={<Libros />} />
          <Route path='/Personajes' element={<Personajes />} />
          <Route path='/casas' element={<Casas />} />
        </Routes>
      </main>
      <Footer />

    </Router >

  )
}

export default App