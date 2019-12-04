import React, {useReducer} from 'react'
function App() {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'add':
        return state + 1
      case 'dec':
        return state -1
      default:
        return state
    }
  }, 0)
  return (
    <>
      <p>当前的count为{state}</p>
      <button onClick={(a) => {dispatch({type: 'add'})}}>increase</button>
      <button onClick={(a) => {dispatch({type: 'dec'})}}>decrease</button>
    </>
  )
}
export default App