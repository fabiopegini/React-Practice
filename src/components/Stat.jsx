import React, { useEffect, useState } from 'react'
import './Stat.css'
import { checkButton } from '../logic'

const Stat = ({statName, buttonClicked}) => {
  const [renderState, setRenderState] = useState(0)

  useEffect(()=> {
    if(buttonClicked.name === 'firstRender') return
    let addOrSubValue = checkButton(buttonClicked,statName)
    console.log(addOrSubValue)
    setRenderState(renderState + addOrSubValue)
    
  }, [buttonClicked])

  return (
    renderState === 0 
    ? <span className='stat'>{statName}</span> 
    : (
      renderState === 1 
      ? <span className='stat highlighted'>{statName}</span>
      : <span className='stat highlighted plus'>{statName + `(${renderState})`}</span> 
    )
    
  )
}

export default Stat