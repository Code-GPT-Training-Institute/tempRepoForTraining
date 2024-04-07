import { useRef } from 'react'
import { useState } from 'react'

function App() {
  const [power, setPower] = useState(0)
  let powerInputRef = useRef();

  let handleClickEvent = () => {
    setPower(Number(powerInputRef.current.value))
  }

  return (
    <>
      <div>
        <h1>Functional Component</h1>

        <h3> POWER: {power}</h3>

        <button onClick={ () => setPower((power) => power + 10)}>increase power</button>
        <br/>

        <input onChange={ (evt) => setPower(Number(evt.target.value))} type='range' />

        <input ref={ powerInputRef } type='number' />
        <button onClick={ handleClickEvent }>submit</button>
        {/* <button onClick={ () => setPower(Number(powerInputRef.current.value))}>submit</button> */}
      </div>
    </>
  )
}

export default App
