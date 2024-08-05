import React from 'react'

const Bulb = ({isOn}) => {

  return (
    <>
     <div className="bulb" style={{ backgroundColor: isOn ? 'yellow' : 'transparent', boxShadow: isOn ? 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' : 'none' }}>
        <p>{isOn ? "Light ON" : "Light OFF"} </p>
  </div>
    </>
  )
}

export default Bulb