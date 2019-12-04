import React, {useState, createContext, useContext} from 'react'
const CounterContext = createContext()
function Counter() {
  let count = useContext(CounterContext)
  return (
    <>
      <h2>{count}</h2>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <CounterContext.Provider value={count}>
        <Counter />
      </CounterContext.Provider>
    </>
  )
}
export default App