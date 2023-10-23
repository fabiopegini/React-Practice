import React, { useContext, useEffect, useState } from 'react'
import { ClickedContext } from '../context/button_clicked'
import { checkButton } from '../logic'
import './Stat.css'

const Stat = ({statName}) => {
  const [renderState, setRenderState] = useState(0)

  const {buttonClicked} = useContext(ClickedContext)

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