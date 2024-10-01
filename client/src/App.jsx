import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from "./components/Header";
import Register from "./pages/Register";

export default function App() {
  return (
  
     
      
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/logOut' element={<LogOut/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />


    </Routes>
    
    
    
    </BrowserRouter>

  )
}
