import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      typ : type 
    })
  }

  setTimeout(() => {
    showAlert(null)
  }, 5000);

  const removeBackground = () => {
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }

  const toggleMode= (cls)=> {
    removeBackground()
    document.body.classList.add('bg-'+cls)
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("success","Light mode Enabled")
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("success","Dark mode Enabled")
    }
    
  }
  return (
    <>
    <Router>
      <Navbar title ="TextUtils" abouttext= "About" mode={mode} togglemode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3" >
        <Routes>
          <Route path="/about" element={<About mode={mode} togglemode={toggleMode}/>}/>
          <Route path="/" element= {<TextForm heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra-Spaces" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
