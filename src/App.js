import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';


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
        <Header mode={mode} color={color} toggleMode={toggleMode}/>
        <Home mode={mode}/>
        <Footer mode={mode}/>
    </>
  );
}

export default App;
