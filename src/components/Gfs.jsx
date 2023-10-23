import React from 'react'
import Gf from './Gf'
import { gfs } from '../constants'

const ArrayOfGfs = () => {
  let array = []
  gfs.map((gf,index) => {
   array[index] = <Gf name={gf.name} source={gf.source} key={gf.id}/>
  })
  return array
}

const Gfs = () => {

  return (
    <ArrayOfGfs />
  )
}

export default Gfs