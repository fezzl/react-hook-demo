import React, {useState, useEffect, useCallback} from 'react'

function useResize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  },[])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  },[onResize])

  return size
}

function App() {
  const size = useResize()
  return (
    <>
      <p>屏幕宽: {size.width}, 屏幕高: {size.height}</p>
    </>
  )
}
export default App