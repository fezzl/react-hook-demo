import React, {useState, useEffect} from 'react'
function App() {
  const [age, setAge] = useState(22)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端工程师')
  useEffect(() => {
    console.log(age)
  }, [age])
  return (
    <>
      <p>zzl今年 {age} 岁</p>
      <p>性别是: {sex}</p>
      <p>工作是: {work}</p>
      <button onClick={() => {setAge(age + 1)}}>change age</button>
    </>
  )
}
export default App