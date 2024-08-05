import { useState } from "react"
import Bulb from "./components/Bulb"
import LearnComponent from "./components/LearnComponent"
import Switch from "./components/Switch"


function App() {
  const  [isOn, setIsOn] = useState(false)
 
  const onToggle = (action) =>{
    console.log("i want check action " + action);
    if(action==="ON" && !isOn){
      console.log( "  i want to check sate:-  " +  !isOn)
      setIsOn(true)
      console.log("status check :-  " + isOn) 
  }
}
const offToggle = (action) =>{
  console.log("i want check action " + action);
  if(action==="OFF" && isOn){
    console.log( "  i want to check sate:-  " +  isOn)
    setIsOn(false)
    console.log("status check :-  " + isOn) 
}
}
  

  return (
    <>
      {/* <LearnComponent/> */}
      <Switch isOn={isOn} onToggle={onToggle} offToggle={offToggle} head="switch on off practice"/>
      <Bulb isOn={isOn}/>
    </>
  )
}

export default App
