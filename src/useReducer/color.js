import React,{createContext, useReducer} from 'react'

export const ColorContext = createContext({})

export const UPDATED_COLOR = 'UPDATED_COLOR'

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATED_COLOR':
      return action.color
    default:
      return state
  }
}
export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <ColorContext.Provider value={{color, dispatch}}>
      {
        props.children
      }
    </ColorContext.Provider>
  )
}