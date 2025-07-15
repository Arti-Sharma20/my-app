import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import About from './components/About'; // Uncomment if needed
import{
  BrowserRouter as Router,
  
  Route,
  Routes
  
}from "react-router-dom";




function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title='Textutils-Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title='Textutils-Light Mode'
    }

    }
  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      
      <div className="container my-3" >
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
        <Route path="/about" element={<About />} />
        </Routes> 
      </div>
      </Router>
    </>
  );
}

export default App;
