import React, { useContext, useState } from 'react'
import { ClickedContext } from '../context/button_clicked'
import './Gf.css'

const Gf = ({name, source}) => {

  const {setButtonClicked} = useContext(ClickedContext)

  const [button, setButton] = useState({name: name, active: false})

  let className = button.active ? 'gf active' : 'gf'

  function handleClick() {
    setButtonClicked({...button, active: !button.active})
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