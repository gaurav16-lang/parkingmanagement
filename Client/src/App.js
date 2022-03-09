import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Login from './components/Login'
import Registartion from './components/Registartion'
import Detail from './components/Detail'
import Parkingmangement from './components/Parkingmangement'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/user" element={<h1>user</h1>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registration" element={<Registartion />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
        <Route path="/parkingmanage" element={<Parkingmangement />}></Route>
      </Routes>
    </div>
  )
}

export default App
