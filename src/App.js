
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Food from './components/Food'
import Nature from './components/Nature'
import Adventure from './components/Adventure'
import Entertainment from './components/Entertainment';

function App() {

  return <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Food' element={<Food />} />
      <Route path='/Nature' element={<Nature />} />
      <Route path='/Adventure' element={<Adventure />} />
      <Route path='/Entertainment' element={<Entertainment />} />
    </Routes>



  </BrowserRouter>
}

export default App;
