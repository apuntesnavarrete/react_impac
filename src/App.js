import {BrowserRouter, Route , Routes } from 'react-router-dom'
import Campeones from './components/Campeones'

import './App.css';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Campeones></Campeones>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}