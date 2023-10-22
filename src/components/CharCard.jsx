import React, { useState } from 'react'
import squall from '../img/Ff8-squall.png'
import { getSourceBySelect } from '../logic.js'
import './CharCard.css'


const CharCard = () => {
  const [char, setChar] = useState({name: "Squall", source: squall})

  return (
    <div className='card'>
      <h1 className='card__title'>{char.name}</h1>
      <img className='card__img' src={char.source} alt="Character Portrait" />
      <label htmlFor="char-select"></label>
      <select className='card__select' onChange={(ev) => setChar(getSourceBySelect(ev.target.value))} name="characters-list" id="char-select">
        <option className='card__select__option' value="squall">Squall</option>
        <option className='card__select__option' value="quistis">Quistis</option>
        <option className='card__select__option' value="zell">Zell</option>
        <option className='card__select__option' value="rinoa">Rinoa</option>
        <option className='card__select__option' value="selphie">Selphie</option>
        <option className='card__select__option' value="irvine">Irvine</option>
      </select>
    </div>
  )
}

export default CharCard