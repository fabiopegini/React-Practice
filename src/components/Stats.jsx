import React from 'react'
import Stat from './Stat'
import { statsNames } from '../constants'
import './Stats.css'

const ArrayOfStats = () => {
  let array = []
  statsNames.map((stat, index) => {
    array[index] = <Stat statName={stat.name} key={stat.id} />
  })
  return array
}

const Stats = () => {
  return (
    <div className='stats-container'>
      <ArrayOfStats />
    </div>
  )
}

export default Stats