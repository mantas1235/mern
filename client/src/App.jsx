import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./assets/pages/Home"
import About from './assets/pages/About';
import Signin from './assets/pages/Signin';
import SignUp from './assets/pages/SignUp';
import Profile from './assets/pages/Profile';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
    
    
    </BrowserRouter>
   
  )
}

export default App