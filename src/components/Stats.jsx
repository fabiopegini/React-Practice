import React from 'react'
import Stat from './Stat'
import './Stats.css'
import { statsNames } from '../constants'

const ArrayOfStats = ({buttonClicked}) => {
  let array = []
  statsNames.map((stat, index) => {
    array[index] = <Stat statName={stat.name} buttonClicked={buttonClicked} key={stat.id} />
  })
  return array
}

const Stats = ({buttonClicked}) => {
  return (
    <div className='stats-container'>
      <ArrayOfStats buttonClicked={buttonClicked} />
    </div>
  )
}

export default Stats