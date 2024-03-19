import "./App.css";
import Alerts from "./components/Alerts";
import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
 const [mode, setMode]=useState('light');

const [alert , setAlert]=useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(()=>{
setAlert(null);
},1500)
}


const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='rgb(10 7 31)';
    showAlert("Dark mode has been enabled","success");
    //document.title="Textutils-darkMode";
    
    /* setInterval(()=>{
document.title="Textutils is superb webpage";
    },2000);
    setInterval(()=>{
      document.title="install Textutils now";
          },1500);
*/

  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    //document.title="Textutils-lightMode";
  }
}


  return (
    <>
    <BrowserRouter>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}/>
      <div className="container my-3">
        <>
<Routes>
  <Route path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, UpperCase, Lowercase" mode={mode}/>}></Route>
  <Route path='/about' element={<About mode={mode}/>}></Route>
  
</Routes>
</>
      </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
