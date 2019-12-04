import React,{useContext} from 'react'
import {ColorContext, UPDATED_COLOR} from './color'
function Buttons() {
  const {dispatch} = useContext(ColorContext)
  return(
    <>
      <button onClick={() => {dispatch({type:UPDATED_COLOR, color: 'red'})}}>红色</button>
      <button onClick={() => {dispatch({type:UPDATED_COLOR, color: 'yellow'})}}>黄色</button>
    </>
  )
}
export default Buttons