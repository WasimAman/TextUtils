import TextFrom from "./components/TextFrom"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "#141e41";
      document.body.style.color = "whitesmoke";
      document.querySelector("#mode").innerHTML = "Disable Dark Mode"
    }else{
      setMode('light')
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "black";
      document.querySelector("#mode").innerHTML = "Enable Dark Mode"

    }
  }


  return (
    <>
      <Navbar title = "TextUtils"aboutText = "About TextUtils" homeText = "Home" toggleMode={toggleMode} mode = {mode}/>
      <TextFrom heading ="Enter Text Below" mode={mode}/>
    </>
  )
}

export default App
