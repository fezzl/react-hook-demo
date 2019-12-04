import React, {useRef, useState, useEffect} from 'react'

function App() {
  const inputEl = useRef(null) // 获取dom
  const textEl = useRef() // 存储变量
  useEffect(() => {
    textEl.current = text
    console.log(textEl.current)
  })
  const handleClick = () => {
    inputEl.current.value = 'hello react-hook'
    console.log(inputEl.current)
  }
  const [text, setText] = useState('js is the best')
  return (
    <>
      <input type="text" ref={inputEl}/>
      <button onClick={handleClick}>获取文本框的值</button>
      <br/>
      <br/>
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
    </>
  )
}
export default App