import {BrowserRouter, Route , Routes } from 'react-router-dom'
import Inicio from './components/inicio'
import Personaje from './components/personaje'
import Campeones from './components/Campeones'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
          <Route path='/Campeones' element={<Campeones></Campeones>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}