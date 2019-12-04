import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('render Index')
    return () => {
      console.log('destory Index')
    }
  }, [])
  return (
    <h2>首页</h2>
  )
}
function List() {
  useEffect(() => {
    console.log('render List')
  })
  return (
    <h2>列表</h2>
  )
}
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect => click`)
    return () => {
      console.log('useEffect => destory click')
    }
  },[])
  return (
    <>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/list' component={List}/>
      </Router>
    </>
  )
}
export default App