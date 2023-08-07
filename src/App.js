// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import About from './component/About';
import Alert from './component/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },850)
  }
  // setTimeout(showAlert(),2000);


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#343a40";
      showAlert("you have enabled Dark mode","primary");
      document.title='Text-tool --> Dark Mode';
      setInterval(()=>{
        document.title='Text-tool is amazing!!';
      },1000)
      setInterval(()=>{
        document.title='Install Text-tool now!';
      },2700)
      // alert("Dark mode Enabled");
      // setTimeout(showAlert("you have enabled Dark mode"),2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("you have enabled Light mode","primary");      
      document.title='Text-tool --> Light Mode';
      // alert("Light mode Enabled");
      // window.confirm("Are you sure to disabled dark mode?");
    }
  }
  return (
    <>
      {/* <Navbar title="My-App" about="About us" /> */}
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <br/>
      <div className='container my-3 '>
      {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route> 
          <Route exact path="/" element={}>
          </Route>
      </Routes> */}
        {/* <About/> */}

        <Textform heading="Enter your text" txt="Copy and paste or write your content here..." showAlert={showAlert} mode={mode} />

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
