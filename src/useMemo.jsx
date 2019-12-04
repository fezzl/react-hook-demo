import React, {useState,useMemo, useCallback, useEffect} from 'react'

function App() {
  const [name, setName] = useState('zzl')
  const [sex, setSex] = useState('男')
  const childRef = React.createRef()
  useEffect(() => {
    console.log(childRef.current)
  },[])
  return (
    <>
      <button onClick={() => {setName('new name')}}>change name</button>
      <button onClick={() => {setSex('new sex')}}>change sex</button>
      <ChildrenComponent name={name} sex={sex} />
    </>
  )
}
function ChildrenComponent({name, sex}) {
  function changeName(name) {
    console.log(`${name} is change`)
    return name
  }
  const newName = useMemo(() => changeName(name),[name])
  const handleChangeName = useCallback(() => {
    console.log(name)
  },[name])
  return  (
    <>
      <p>{newName}</p>
      <p>{sex}</p>
      <button onClick={handleChangeName} >改变名字</button>
    </>
  )
}
export default App