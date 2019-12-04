import React, {useContext} from 'react'
import ShowArea from './showArea'
import Buttons from './buttons'
import { Color } from './color'
function App() {
  return (
    <>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </>
  )
}
export default App