
import Home from './component/index'
import Profile from './component/profile/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectProf from './component/profile/protectProf';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<ProtectProf> <Profile /> </ ProtectProf>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
