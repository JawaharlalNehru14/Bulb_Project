import React from 'react'

const Switch = ({head, onToggle,offToggle, isOn}) => {
    
    
  return (
   (
    <>
    <h1>{head}</h1>
    <div className='switch'>
        <p className='on' style={{background :isOn ? 'yellow': 'transparent', color:isOn ? 'black' : 'white'} } onClick={()=>onToggle("ON")}>ON</p>
        <p className='off' style={{background :!isOn ? 'yellow': 'transparent', color :isOn ? 'white' : 'black'} } onClick={()=>offToggle("OFF")} >OFF</p>
    </div>
    
    </>
   )
  )
}

Switch.defaultProps = {
 head: "No Heading"
};

export default Switch