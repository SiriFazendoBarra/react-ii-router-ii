import { Routes, Route } from 'react-router-dom'

// import views
import Home from './views/Home'
import Login from './views/Login'
import Menus from './views/Menus'
import Menu from './views/Menu'

//import componentes
import NavBar from './components/NavBar'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  
  return (
    <div className="App ">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/menus' element={<Menus/>} />
        <Route path='/menus/:id' element={<Menu/>} />
        <Route path='/*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
        
    </div>
  )
}

export default App
