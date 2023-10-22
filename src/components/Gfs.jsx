import React from 'react'
import Gf from './Gf'
import { gfs } from '../constants'

const ArrayOfGfs = ({appCallback}) => {
  let array = []
  gfs.map((gf,index) => {
   array[index] = <Gf name={gf.name} source={gf.source} parentCallback={(button) => appCallback(button)} key={gf.id}/>
  })
  return array
}

const Gfs = ({appCallback}) => {

  return (
    <ArrayOfGfs appCallback={appCallback} />
  )
}

export default Gfs