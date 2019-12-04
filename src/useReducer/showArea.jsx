import React, {useContext} from 'react'
import {ColorContext} from './color'
function ShowArea() {
  const {color} = useContext(ColorContext)
  return (
    <>
      <p style={{color}}>现在的颜色是</p>
    </>
  )
}
export default ShowArea