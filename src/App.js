import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';


function App() {
  const [mode, setMode] = useState("light")
  const [color, setColor] = useState("dark")
  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark")
      setColor("light")
      document.body.style.backgroundColor = "#023E8A"
    }
    else {
      setMode("light")
      setColor("dark")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <BrowserRouter>
        <Header mode={mode} color={color} toggleMode={toggleMode}/>
        <Routes>
          <Route path='/' element={<Home mode={mode}/>}/>
          <Route path='/qualification' element={<Qualification mode={mode}/>}/>
          <Route path='/projects' element={<Projects mode={mode}/>}/>
          <Route path='/about' element={<About mode={mode}/>}/>
          <Route path='/experience' element={<Experience mode={mode}/>}/>
          <Route path='/skills' element={<Skills mode={mode}/>}/>
          <Route path='/get-in-touch' element={<Contact mode={mode}/>}/>
        </Routes>
        <Footer mode={mode}/>
      </BrowserRouter>
    </>
  );
}

export default App;
