import React, { useState } from 'react'
import './Gf.css'

const Gf = ({name, source, parentCallback}) => {
  const [button, setButton] = useState({name: name, active: false})

  let className = button.active ? 'gf active' : 'gf'

  function handleClick() {
    parentCallback({...button, active: !button.active})
    setButton({name: button.name , active: !button.active})
    
  }
  
  return (
    <img 
      className={className}
      src={source} 
      alt={name} 
      onClick={()=> {
        handleClick()
      }}
    />
  )
}

export default Gf